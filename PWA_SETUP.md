# PWA Icon Setup Guide

Your EduPortal web app is now configured as a Progressive Web App (PWA) and can be installed on home screens!

## What's Set Up

✅ **PWA Manifest** (`public/manifest.json`) - App metadata and installation info
✅ **Service Worker** (`public/service-worker.js`) - Offline support and caching
✅ **HTML Entry Point** (`public/index.html`) - PWA-ready HTML with meta tags

## Next Steps: Generate App Icons

To complete the PWA setup, generate these icon sizes from `assets/images/icon.png`:

### Required Sizes:
- **192x192** → `public/icon-192x192.png` (home screen icon)
- **512x512** → `public/icon-512x512.png` (splash screen icon)
- **96x96** → `public/icon-96x96.png` (shortcut icon)
- **Maskable 192x192** → `public/icon-maskable.png` (adaptive icon)
- **Favicon** → `public/favicon.png` (browser tab)

### Using ImageMagick (Windows):
```powershell
# Install ImageMagick if needed: choco install imagemagick

magick assets/images/icon.png -resize 192x192 public/icon-192x192.png
magick assets/images/icon.png -resize 512x512 public/icon-512x512.png
magick assets/images/icon.png -resize 96x96 public/icon-96x96.png
magick assets/images/icon.png -resize 192x192 public/icon-maskable.png
magick assets/images/icon.png -resize 32x32 public/favicon.png
```

### Using FFmpeg:
```powershell
ffmpeg -i assets/images/icon.png -vf scale=192:192 public/icon-192x192.png
ffmpeg -i assets/images/icon.png -vf scale=512:512 public/icon-512x512.png
ffmpeg -i assets/images/icon.png -vf scale=96:96 public/icon-96x96.png
ffmpeg -i assets/images/icon.png -vf scale=32:32 public/favicon.png
```

### Using Online Tools:
1. Visit https://www.favicon-generator.org/ or https://www.pngtoico.com/
2. Upload `assets/images/icon.png`
3. Generate and download the required sizes
4. Save them to the `public/` directory

## How to Install from Web

Once icons are set up and you visit the web app:

### **Android (Chrome/Edge):**
1. Open http://localhost:8081 (or production URL)
2. Look for "Install app" prompt at bottom
3. Click to install on home screen

### **iOS (Safari):**
1. Open http://localhost:8081 in Safari
2. Tap Share → Add to Home Screen
3. App appears on home screen

### **Desktop (Chrome/Edge):**
1. Visit the app
2. Click the install icon (⬇️ in address bar) or right-click → "Install app"
3. Creates desktop shortcut

## Features Enabled

✅ **Offline Support** - Works without internet using cached data
✅ **Home Screen Installation** - Add like native apps
✅ **App Shortcuts** - Quick access to Dashboard and Assignments
✅ **Installable** - Full PWA capabilities
✅ **Service Worker** - Background sync and caching
✅ **Theme Colors** - Custom colors in browser UI

## Production Deployment

Update URLs in `public/manifest.json` start_url and server config when deploying to production. Change `http://localhost:8081` to your production domain.

## Troubleshooting

- **Icons not showing?** Regenerate from source image with exact dimensions
- **Service Worker not registering?** Check browser console for errors
- **Install prompt missing?** Ensure HTTPS in production (required for PWA)
- **Offline not working?** Verify service worker is registered and caching strategies are active

Your app is ready to be installed! 🚀
