const { Jimp } = require('jimp');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'footer-logo.png');
const outputPath = inputPath;

async function cropWatermark() {
    const img = await Jimp.read(inputPath);
    const w = img.bitmap.width;
    const h = img.bitmap.height;
    // Crop off the bottom 6% to remove the ChatGPT watermark in the corner
    const cropHeight = Math.floor(h * 0.94);
    img.crop({ x: 0, y: 0, w: w, h: cropHeight });
    await img.write(outputPath);
    console.log(`Done! Cropped to ${w}x${cropHeight}, saved to:`, outputPath);
}

cropWatermark().catch(err => { console.error(err); process.exit(1); });
