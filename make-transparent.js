import { Jimp } from 'jimp';

async function makeTransparent() {
    try {
        const img = await Jimp.read('public/footer-logo-chatgpt-processed.png');

        const bgColor = img.getPixelColor(1, 1);

        const refR = (bgColor >>> 24) & 255;
        const refG = (bgColor >>> 16) & 255;
        const refB = (bgColor >>> 8) & 255;

        console.log(`Background color found: R:${refR} G:${refG} B:${refB}`);

        const w = img.bitmap.width;
        const h = img.bitmap.height;

        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const color = img.getPixelColor(x, y);
                const r = (color >>> 24) & 255;
                const g = (color >>> 16) & 255;
                const b = (color >>> 8) & 255;

                const diff = Math.abs(r - refR) + Math.abs(g - refG) + Math.abs(b - refB);

                // If it's close to background color, make transparent
                if (diff < 80) {
                    // Set alpha to 0 by wiping out the lower 8 bits and setting them to 0
                    // But wait, it's easier to just use setPixelColor
                    // RGBA integer, we want to keep RGB and set A to 0. Use bitwise:
                    const newColor = (r << 24) | (g << 16) | (b << 8) | 0;
                    // Note: JavaScript bitwise operators treat operands as 32-bit signed integers,
                    // so we need to construct it carefully or just leave A as 0x00
                    const intColor = ((r << 24) >>> 0) + ((g << 16) >>> 0) + ((b << 8) >>> 0) + 0;
                    img.setPixelColor(intColor, x, y);
                }
            }
        }

        await img.write('public/footer-logo-transparent.png');
        console.log('Successfully made background transparent.');
    } catch (err) {
        console.error(err);
    }
}

makeTransparent();
