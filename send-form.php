<?php
if (function_exists('session_status') && session_status() !== PHP_SESSION_ACTIVE) {
  @session_start();
}
header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(array('ok' => false, 'error' => 'Method not allowed'));
  exit;
}

if (!empty($_POST['website_url'])) {
  echo json_encode(array('ok' => true, 'message' => 'Thank you.'));
  exit;
}

function sf_clean_raw($value, $max) {
  $value = trim(strip_tags((string) $value));
  if (function_exists('mb_substr')) {
    return mb_substr($value, 0, $max);
  }
  return substr($value, 0, $max);
}

function sf_first($keys, $max) {
  foreach ($keys as $key) {
    if (!empty($_POST[$key])) {
      return sf_clean_raw($_POST[$key], $max);
    }
  }
  return '';
}

function sf_captcha_ok($answer) {
  $answer = strtoupper(trim((string) $answer));
  if ($answer === '') {
    return false;
  }
  if (!empty($_SESSION['sf_captcha']) && hash_equals(strtoupper((string) $_SESSION['sf_captcha']), $answer)) {
    unset($_SESSION['sf_captcha']);
    return true;
  }
  if (empty($_COOKIE['sf_captcha'])) {
    return false;
  }
  $parts = explode('|', (string) $_COOKIE['sf_captcha'], 2);
  if (count($parts) !== 2) {
    return false;
  }
  $exp = intval($parts[0]);
  $mac = $parts[1];
  $secret = 'SfC4ptch4-superfabinc-2026';
  $expected = hash_hmac('sha256', $answer . '|' . $exp, $secret);
  if ($exp < time() || !hash_equals($expected, $mac)) {
    return false;
  }
  setcookie('sf_captcha', '', time() - 3600, '/');
  unset($_SESSION['sf_captcha']);
  return true;
}

$type = sf_first(array('form_type'), 40);
$page = sf_first(array('page_url'), 300);
$name = sf_first(array('name', 'your-name', 'contactPerson'), 120);
$email = sf_first(array('email', 'your-email'), 180);
$phone = sf_first(array('phone', 'your-phone', 'mobile-no', 'contactNo'), 40);
$company = sf_first(array('company', 'companyName'), 160);
$country = sf_first(array('country'), 80);
$address = sf_first(array('address'), 300);
$message = sf_first(array('message', 'your-message', 'description', 'typeOfRequirement'), 2000);

if ($name === '' || $phone === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(array('ok' => false, 'error' => 'Please enter your name, email and mobile number.'));
  exit;
}

$captcha_answer = sf_first(array('sf_captcha', 'captcha-1'), 20);
if (!sf_captcha_ok($captcha_answer)) {
  http_response_code(400);
  echo json_encode(array('ok' => false, 'error' => 'Please enter the correct verification code.'));
  exit;
}

$labels = array(
  'inquiry' => 'Quick Inquiry',
  'contact' => 'Contact Form',
  'catalogue' => 'Catalogue Request',
  'career' => 'Career Application'
);
$label = isset($labels[$type]) ? $labels[$type] : 'Website Form';
$to = 'info@superfabinc.com';
$catalogue = 'https://superfabinc.com/catalogue/';

$body  = "New " . $label . " from superfabinc.com\n\n";
$body .= "Name: " . $name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Mobile: " . $phone . "\n";
$body .= "Company: " . ($company !== '' ? $company : '(not provided)') . "\n";
$body .= "Country: " . ($country !== '' ? $country : '(not provided)') . "\n";
$body .= "Address: " . ($address !== '' ? $address : '(not provided)') . "\n";
$body .= "Message: " . ($message !== '' ? $message : '(not provided)') . "\n";
$body .= "Page: " . ($page !== '' ? $page : '(unknown)') . "\n";
$body .= "Time: " . date('Y-m-d H:i:s') . "\n";

$skip = array('website_url', 'form_type', 'page_url', 'sf_captcha', '_wpcf7', '_wpcf7_version', '_wpcf7_locale', '_wpcf7_unit_tag', '_wpcf7_container_post', '_wpcf7_posted_data_hash', '_wpcf7_recaptcha_response', 'captcha-1', '_wpcf7_captcha_challenge_captcha-1');
$extra = '';
foreach ($_POST as $key => $value) {
  if (in_array($key, $skip, true)) {
    continue;
  }
  if (is_array($value)) {
    $value = implode(', ', $value);
  }
  $clean = sf_clean_raw($value, 500);
  if ($clean !== '') {
    $extra .= $key . ": " . $clean . "\n";
  }
}
if ($extra !== '') {
  $body .= "\nAll submitted fields:\n" . $extra;
}

$from_header = "From: Superfab Website <info@superfabinc.com>\r\n";
$reply_header = "Reply-To: " . $name . " <" . $email . ">\r\n";

$admin_sent = false;
$file = isset($_FILES['resume']) ? $_FILES['resume'] : (isset($_FILES['file']) ? $_FILES['file'] : null);
if ($file && isset($file['tmp_name']) && is_uploaded_file($file['tmp_name']) && $file['error'] === UPLOAD_ERR_OK) {
  $filename = preg_replace('/[^A-Za-z0-9._-]/', '_', $file['name']);
  $content = chunk_split(base64_encode(file_get_contents($file['tmp_name'])));
  $boundary = md5(uniqid(time(), true));
  $headers  = $from_header . $reply_header;
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"" . $boundary . "\"\r\n";
  $msg  = "--" . $boundary . "\r\n";
  $msg .= "Content-Type: text/plain; charset=UTF-8\r\n";
  $msg .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
  $msg .= $body . "\r\n";
  $msg .= "--" . $boundary . "\r\n";
  $msg .= "Content-Type: application/octet-stream; name=\"" . $filename . "\"\r\n";
  $msg .= "Content-Transfer-Encoding: base64\r\n";
  $msg .= "Content-Disposition: attachment; filename=\"" . $filename . "\"\r\n\r\n";
  $msg .= $content . "\r\n";
  $msg .= "--" . $boundary . "--\r\n";
  $admin_sent = @mail($to, $label . ' - Superfabinc.com - ' . $name, $msg, $headers);
} else {
  $headers  = $from_header . $reply_header;
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
  $admin_sent = @mail($to, $label . ' - Superfabinc.com - ' . $name, $body, $headers);
}

if (!$admin_sent) {
  http_response_code(500);
  echo json_encode(array('ok' => false, 'error' => 'Could not send right now. Please email info@superfabinc.com'));
  exit;
}

$user_message = 'Thank you. We have received your details and will get back to you shortly.';
$include_catalogue = ($type !== 'career');
if ($include_catalogue) {
  $user_message = 'Thank you. We have received your details. You can view the Superfab catalogue here:';
  $user_body  = "Hello " . $name . ",\n\n";
  $user_body .= "Thank you for contacting Superfab Inc.\n";
  $user_body .= "We have received your details and our team will get back to you shortly.\n\n";
  $user_body .= "View / download the catalogue:\n" . $catalogue . "\n\n";
  $user_body .= "Regards,\nSuperfab Inc.\ninfo@superfabinc.com\n";
  $user_headers  = "From: Superfab Inc <info@superfabinc.com>\r\n";
  $user_headers .= "MIME-Version: 1.0\r\n";
  $user_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
  @mail($email, 'Thank you for contacting Superfab Inc', $user_body, $user_headers);
} else {
  $user_message = 'Thank you. Your career application has been received. Our team will contact you if there is a suitable opening.';
}

$response = array(
  'ok' => true,
  'message' => $user_message
);
if ($include_catalogue) {
  $response['catalogue_url'] = $catalogue;
}

echo json_encode($response);
