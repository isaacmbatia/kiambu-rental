const { Jimp } = require('jimp');
const path = require('path');

const inputPath = "C:\\Users\\Comp\\Downloads\\ChatGPT Image Feb 21, 2026, 12_27_05 AM.png";
const outputPath = path.join(__dirname, 'public', 'footer-logo.png');

async function removeBg() {
    const img = await Jimp.read(inputPath);

    img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];

        // Dark green background: green channel dominates
        if (g > r * 1.4 && g > b * 1.3 && r < 120 && b < 120 && g > 60) {
            this.bitmap.data[idx + 3] = 0; // transparent
        }
    });

    await img.write(outputPath);
    console.log('Done! Saved to:', outputPath);
}

removeBg().catch(err => { console.error(err.message); process.exit(1); });
