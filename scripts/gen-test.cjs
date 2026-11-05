/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');

const svg = `<svg width="1024" height="1024" viewBox="0 0 1024 1024">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#04100b" />
      <stop offset="55%" stop-color="#07170f" />
      <stop offset="100%" stop-color="#00d966" stop-opacity="0.9" />
    </linearGradient>
  </defs>
  <rect width="1024" height="1024" fill="url(#g)" />
</svg>`;

sharp(Buffer.from(svg), { density: 150 })
  .webp({ quality: 80 })
  .toFile('C:/newprojects/tuf/Website/src/assets/images/Peoples/test-gen-1.webp')
  .then((info) => console.log('OK', info))
  .catch((e) => console.error('ERR', e.message));
