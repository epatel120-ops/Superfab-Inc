$ErrorActionPreference = "Stop"
$root = "c:\HD\Superfab\superfabinc.com"
$backup = "c:\HD\Superfab\_unused_backup"
$keepExt = @(
  '.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg',
  '.woff', '.woff2', '.ttf', '.eot', '.otf', '.ico', '.map'
)
$keepPlugins = @(
  'revslider', 'js_composer', 'popup-maker', 'Ultimate_VC_Addons', 'cubeportfolio'
)

function Move-ToBackup([string]$full) {
  if (-not (Test-Path -LiteralPath $full)) { return }
  $rel = $full.Substring($root.Length).TrimStart('\')
  $dest = Join-Path $backup $rel
  $destDir = Split-Path $dest
  if (-not (Test-Path -LiteralPath $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
  }
  if (Test-Path -LiteralPath $dest) {
    Remove-Item -LiteralPath $dest -Recurse -Force
  }
  Move-Item -LiteralPath $full -Destination $dest -Force
}

New-Item -ItemType Directory -Force -Path $backup | Out-Null
$moved = 0

Write-Host "=== Phase 1: unused plugins ==="
$pluginRoot = Join-Path $root "wp-content\plugins"
Get-ChildItem -LiteralPath $pluginRoot -Force | ForEach-Object {
  if ($_.PSIsContainer) {
    if ($keepPlugins -contains $_.Name) {
      Write-Host "KEEP plugin folder $($_.Name)"
    } else {
      Write-Host "BACKUP plugin $($_.Name)"
      Move-ToBackup $_.FullName
      $script:moved++
    }
  } else {
    # leftover plugin index.php / hello.php / htaccess
    Write-Host "BACKUP plugin file $($_.Name)"
    Move-ToBackup $_.FullName
    $script:moved++
  }
}

Write-Host "`n=== Phase 2: unused / PHP files inside kept plugins ==="
foreach ($n in $keepPlugins) {
  $dir = Join-Path $pluginRoot $n
  if (-not (Test-Path -LiteralPath $dir)) { continue }
  Get-ChildItem -LiteralPath $dir -Recurse -File -Force | ForEach-Object {
    $ext = $_.Extension.ToLowerInvariant()
    if ($keepExt -notcontains $ext) {
      Move-ToBackup $_.FullName
      $script:moved++
    }
  }
}

Write-Host "`n=== Phase 3: unused themes ==="
$themeRoot = Join-Path $root "wp-content\themes"
Get-ChildItem -LiteralPath $themeRoot -Force | ForEach-Object {
  if ($_.PSIsContainer) {
    if ($_.Name -eq 'laszlo') {
      Write-Host "KEEP theme laszlo assets"
    } else {
      Write-Host "BACKUP theme $($_.Name)"
      Move-ToBackup $_.FullName
      $script:moved++
    }
  } else {
    Move-ToBackup $_.FullName
    $script:moved++
  }
}

Write-Host "`n=== Phase 4: PHP/HTML inside laszlo theme ==="
$laszlo = Join-Path $themeRoot "laszlo"
if (Test-Path -LiteralPath $laszlo) {
  Get-ChildItem -LiteralPath $laszlo -Recurse -File -Force | ForEach-Object {
    $ext = $_.Extension.ToLowerInvariant()
    if ($keepExt -notcontains $ext) {
      Move-ToBackup $_.FullName
      $script:moved++
    }
  }
}

Write-Host "`n=== Phase 5: mu-plugins ==="
$mu = Join-Path $root "wp-content\mu-plugins"
if (Test-Path -LiteralPath $mu) {
  Move-ToBackup $mu
  $script:moved++
}

Write-Host "`n=== Phase 6: remove empty leftover dirs in site ==="
# deepest-first empty directory cleanup under wp-content/plugins and themes
foreach ($base in @($pluginRoot, $themeRoot)) {
  if (-not (Test-Path -LiteralPath $base)) { continue }
  Get-ChildItem -LiteralPath $base -Recurse -Directory -Force |
    Sort-Object { $_.FullName.Length } -Descending |
    ForEach-Object {
      $kids = Get-ChildItem -LiteralPath $_.FullName -Force
      if (-not $kids) { Remove-Item -LiteralPath $_.FullName -Force }
    }
}

Write-Host "`nMoved items: $moved"
Write-Host "Backup: $backup"
Write-Host "DONE"
