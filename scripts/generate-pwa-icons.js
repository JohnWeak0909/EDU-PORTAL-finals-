#!/usr/bin/env node

/**
 * PWA Icon Generator
 * Generates required icon sizes from source image
 */

const fs = require('fs');
const path = require('path');

async function generateIcons() {
  try {
    // Try to use sharp if available
    let sharp;
    try {
      sharp = require('sharp');
      console.log('✓ Using sharp for image processing');
    } catch (e) {
      console.warn('⚠️  sharp not found. Install with: npm install --save-dev sharp');
      console.log('\nAlternative: Use ImageMagick:');
      console.log('  Windows: choco install imagemagick');
      console.log('  Mac: brew install imagemagick');
      console.log('  Linux: apt-get install imagemagick');
      console.log('\nThen run:');
      console.log('  magick assets/images/icon.png -resize 192x192 public/icon-192x192.png');
      console.log('  magick assets/images/icon.png -resize 512x512 public/icon-512x512.png');
      console.log('  magick assets/images/icon.png -resize 96x96 public/icon-96x96.png');
      console.log('  magick assets/images/icon.png -resize 32x32 public/favicon.png');
      return;
    }

    const sourceIcon = path.join(__dirname, '..', 'assets/images/icon.png');
    const publicDir = path.join(__dirname, '..', 'public');

    if (!fs.existsSync(sourceIcon)) {
      console.error('❌ Source icon not found at:', sourceIcon);
      return;
    }

    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const sizes = [
      { name: 'icon-192x192.png', size: 192 },
      { name: 'icon-512x512.png', size: 512 },
      { name: 'icon-96x96.png', size: 96 },
      { name: 'favicon.png', size: 32 },
    ];

    console.log('Generating PWA icons...\n');

    for (const { name, size } of sizes) {
      const outputPath = path.join(publicDir, name);
      await sharp(sourceIcon)
        .resize(size, size, {
          fit: 'cover',
          position: 'center',
        })
        .png()
        .toFile(outputPath);
      console.log(`✓ Generated ${name} (${size}x${size})`);
    }

    // Generate maskable icon
    const maskablePath = path.join(publicDir, 'icon-maskable.png');
    await sharp(sourceIcon)
      .resize(192, 192, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0.5 },
      })
      .png()
      .toFile(maskablePath);
    console.log('✓ Generated icon-maskable.png (192x192)');

    console.log('\n✅ All PWA icons generated successfully!');
    console.log('\nYour app is now ready to be installed on home screens.');
  } catch (error) {
    console.error('❌ Error generating icons:', error.message);
    process.exit(1);
  }
}

generateIcons();
