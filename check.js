const { Jimp } = require('jimp');

async function checkCorner() {
  const image = await Jimp.read('public/logo.png');
  const color = image.getPixelColor(0, 0);
  console.log('Pixel at 0,0 (hex):', color.toString(16));
}

checkCorner();
