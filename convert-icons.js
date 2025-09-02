const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'public', 'icons');
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

async function convertSVGtoPNG() {
  for (const size of sizes) {
    const svgFile = path.join(iconsDir, `icon-${size}x${size}.svg`);
    const pngFile = path.join(iconsDir, `icon-${size}x${size}.png`);
    
    try {
      await sharp(svgFile)
        .png()
        .toFile(pngFile);
      
      console.log(`Converted icon-${size}x${size}.svg to PNG`);
    } catch (error) {
      console.error(`Error converting icon-${size}x${size}.svg:`, error);
    }
  }
  
  console.log('All icons converted to PNG successfully!');
}

convertSVGtoPNG();
