# EduPortal - Production Build & Deploy Script (PowerShell)
# This script automates the build process for production deployment on Windows

Write-Host "=================================" -ForegroundColor Blue
Write-Host "EduPortal - Production Build" -ForegroundColor Blue
Write-Host "=================================" -ForegroundColor Blue

# Step 1: Check prerequisites
Write-Host "`nStep 1: Checking prerequisites..." -ForegroundColor Yellow

try {
    npm --version > $null 2>&1
    Write-Host "✓ npm found" -ForegroundColor Green
} catch {
    Write-Host "✗ npm is not installed" -ForegroundColor Red
    exit 1
}

try {
    npx --version > $null 2>&1
    Write-Host "✓ npx found" -ForegroundColor Green
} catch {
    Write-Host "✗ npx is not installed" -ForegroundColor Red
    exit 1
}

# Step 2: TypeScript check
Write-Host "`nStep 2: TypeScript compilation check..." -ForegroundColor Yellow
npm run check
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ TypeScript errors found. Fix them before building." -ForegroundColor Red
    exit 1
}
Write-Host "✓ TypeScript check passed" -ForegroundColor Green

# Step 3: Environment setup
Write-Host "`nStep 3: Setting up environment..." -ForegroundColor Yellow
$env:NODE_ENV = "production"
$env:EAS_NO_VCS = "1"
$env:EAS_SKIP_AUTO_FINGERPRINT = "1"
$env:EAS_BUILD_NO_EXPO_GO_WARNING = "1"

Write-Host "✓ Environment variables set" -ForegroundColor Green

# Step 4: Build selection
Write-Host "`nStep 4: Select build type:" -ForegroundColor Yellow
Write-Host "  1) APK (Testing/Direct Distribution)"
Write-Host "  2) AAB (Google Play Store)"
$choice = Read-Host "Enter choice (1 or 2)"

if ($choice -eq "1") {
    $profile = "preview"
    Write-Host "Building APK for testing..." -ForegroundColor Green
} elseif ($choice -eq "2") {
    $profile = "production"
    Write-Host "Building AAB for Play Store..." -ForegroundColor Green
} else {
    Write-Host "✗ Invalid choice. Exiting." -ForegroundColor Red
    exit 1
}

# Step 5: Confirm environment
Write-Host "`nConfiguration:" -ForegroundColor Blue
Write-Host "  Profile: $profile"
Write-Host "  Platform: Android"
Write-Host "  Project: https://expo.dev/accounts/kroj981/projects/edu-portal"

$confirm = Read-Host "`nProceed with build? (yes/no)"
if ($confirm -ne "yes" -and $confirm -ne "y") {
    Write-Host "Build cancelled." -ForegroundColor Yellow
    exit 0
}

# Step 6: Start build
Write-Host "`nStep 5: Starting EAS build..." -ForegroundColor Yellow
Write-Host "This may take 15-30 minutes. Do not close this terminal." -ForegroundColor Yellow

npx eas build --platform android --profile $profile

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n=================================" -ForegroundColor Green
    Write-Host "✓ Build completed successfully!" -ForegroundColor Green
    Write-Host "=================================" -ForegroundColor Green
    Write-Host "Download your app at:" -ForegroundColor Green
    Write-Host "https://expo.dev/accounts/kroj981/projects/edu-portal" -ForegroundColor Blue
} else {
    Write-Host "`n=================================" -ForegroundColor Red
    Write-Host "✗ Build failed" -ForegroundColor Red
    Write-Host "=================================" -ForegroundColor Red
    Write-Host "Check the output above for error details." -ForegroundColor Yellow
    exit 1
}
