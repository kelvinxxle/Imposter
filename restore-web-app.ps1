param(
  [string]$RepoPath = (Get-Location).Path
)

$ErrorActionPreference = 'Stop'

$scriptPath = Join-Path -Path $PSScriptRoot -ChildPath 'scripts/restore-web-app.ps1'

if (!(Test-Path $scriptPath)) {
  throw "Missing helper script at '$scriptPath'. Run 'git pull' and try again."
}

& $scriptPath -RepoPath $RepoPath
