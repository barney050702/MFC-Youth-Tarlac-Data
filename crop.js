const { Jimp } = require('jimp');

async function cropCircle() {
  try {
    const image = await Jimp.read('public/logo.png');
    // Jimp's circle() crops the image to a circle
    image.circle();
    await image.write('public/logo.png');
    console.log('Successfully cropped logo.png to a circle.');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

cropCircle();
