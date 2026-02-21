import { Jimp } from 'jimp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'public', 'footer-logo-chatgpt.png');
const outputPath = path.join(__dirname, 'public', 'footer-logo-chatgpt-processed.png');

async function processImage() {
    try {
        const img = await Jimp.read(inputPath);
        const w = img.bitmap.width;
        const h = img.bitmap.height;
        // Crop off the bottom 10% to remove the ChatGPT watermark in the corner
        const cropHeight = Math.floor(h * 0.90);
        img.crop({ x: 0, y: 0, w: w, h: cropHeight });

        await img.write(outputPath);
        console.log(`Done! Cropped to ${w}x${cropHeight}, saved to:`, outputPath);
    } catch (err) {
        console.error("Error cropping image:", err);
        process.exit(1);
    }
}

processImage();
