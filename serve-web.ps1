param(
  [int]$Port = 8080,
  [string]$Bind = "0.0.0.0"
)

$ErrorActionPreference = "Stop"

$webPath = Join-Path -Path $PSScriptRoot -ChildPath "web"
if (!(Test-Path $webPath)) {
  throw "Missing web folder at '$webPath'. Run this from the repository root."
}

$localIp = $null

try {
  $localIp = Get-NetIPAddress -AddressFamily IPv4 |
    Where-Object {
      $_.IPAddress -ne "127.0.0.1" -and
      $_.IPAddress -notlike "169.254*" -and
      $_.PrefixOrigin -ne "WellKnown"
    } |
    Select-Object -ExpandProperty IPAddress -First 1
} catch {
  # Fallback below for environments where Get-NetIPAddress is unavailable.
}

if (!$localIp) {
  $ipv4Line = ipconfig | Select-String "IPv4 Address" | Select-Object -First 1
  if ($ipv4Line) {
    $localIp = $ipv4Line.ToString() -replace ".*:\s*", ""
  }
}

if (!$localIp) {
  $localIp = "<your-computer-ip>"
}

Write-Host "Serving '$webPath'" -ForegroundColor Cyan
Write-Host "Open on iPhone (same Wi-Fi): http://$localIp`:$Port" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop." -ForegroundColor Yellow

Push-Location $webPath
try {
  python -m http.server $Port --bind $Bind
} finally {
  Pop-Location
}
