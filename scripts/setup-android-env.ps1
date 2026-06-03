# Run after installing Android Studio (SDK Manager → Android SDK Platform-Tools).
# Usage: . .\scripts\setup-android-env.ps1

$SdkRoot = "$env:LOCALAPPDATA\Android\Sdk"

if (-not (Test-Path $SdkRoot)) {
  Write-Host "SDK folder not found: $SdkRoot"
  Write-Host "Install Android Studio and complete the first-run SDK setup, then run this script again."
  return
}

$env:ANDROID_HOME = $SdkRoot
$env:ANDROID_SDK_ROOT = $SdkRoot

$platformTools = Join-Path $SdkRoot "platform-tools"
if (Test-Path $platformTools) {
  $env:Path = "$platformTools;$env:Path"
}

Write-Host "ANDROID_HOME = $env:ANDROID_HOME"
if (Get-Command adb -ErrorAction SilentlyContinue) {
  adb version
} else {
  Write-Host "adb still not found. In Android Studio: SDK Manager → install Platform-Tools."
}

Write-Host ""
Write-Host "To persist for new terminals (run once as your user):"
Write-Host "[Environment]::SetEnvironmentVariable('ANDROID_HOME', '$SdkRoot', 'User')"
Write-Host "[Environment]::SetEnvironmentVariable('ANDROID_SDK_ROOT', '$SdkRoot', 'User')"
Write-Host '$old = [Environment]::GetEnvironmentVariable("Path","User"); if ($old -notlike "*platform-tools*") { [Environment]::SetEnvironmentVariable("Path", "$old;$platformTools", "User") }'
