<?php
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('X-LiteSpeed-Cache-Control: no-cache');

$chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
$code = '';
for ($i = 0; $i < 5; $i++) {
  $code .= $chars[random_int(0, strlen($chars) - 1)];
}

$secret = 'SfC4ptch4-superfabinc-2026';
$exp = time() + 900;
$payload = $exp . '|' . hash_hmac('sha256', strtoupper($code) . '|' . $exp, $secret);
$secure = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off');
setcookie('sf_captcha', $payload, array(
  'expires' => $exp,
  'path' => '/',
  'secure' => $secure,
  'httponly' => true,
  'samesite' => 'Lax'
));

if (function_exists('session_status') && session_status() !== PHP_SESSION_ACTIVE) {
  @session_start();
}
if (isset($_SESSION)) {
  $_SESSION['sf_captcha'] = strtoupper($code);
}

$w = 148;
$h = 48;
$svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' . $w . '" height="' . $h . '" viewBox="0 0 ' . $w . ' ' . $h . '">';
$svg .= '<rect width="100%" height="100%" rx="6" fill="#eef4fb"/>';
for ($i = 0; $i < 7; $i++) {
  $x1 = random_int(0, $w);
  $y1 = random_int(0, $h);
  $x2 = random_int(0, $w);
  $y2 = random_int(0, $h);
  $svg .= '<line x1="' . $x1 . '" y1="' . $y1 . '" x2="' . $x2 . '" y2="' . $y2 . '" stroke="#c5d7ea" stroke-width="1"/>';
}
$x = 16;
$len = strlen($code);
for ($i = 0; $i < $len; $i++) {
  $rot = random_int(-16, 16);
  $y = random_int(30, 38);
  $ch = htmlspecialchars($code[$i], ENT_QUOTES, 'UTF-8');
  $svg .= '<text x="' . $x . '" y="' . $y . '" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#0e77bc" transform="rotate(' . $rot . ' ' . $x . ' ' . ($y - 8) . ')">' . $ch . '</text>';
  $x += 24;
}
$svg .= '</svg>';

header('Content-Type: image/svg+xml; charset=UTF-8');
echo $svg;
