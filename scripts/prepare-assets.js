// Copia a biblioteca de QR Code para vendor/qrcode.js (se ainda não existir)
const fs = require('fs');
const path = require('path');
const dest = path.join(__dirname, '..', 'vendor', 'qrcode.js');
if (fs.existsSync(dest)) {
  console.log('vendor/qrcode.js já existe — nada a fazer.');
  process.exit(0);
}
const candidates = [
  'node_modules/qrcode-generator/qrcode.js',
  'node_modules/qrcode-generator/dist/qrcode.js'
].map(p => path.join(__dirname, '..', p));
const src = candidates.find(p => fs.existsSync(p));
if (!src) {
  console.error('Biblioteca qrcode-generator não encontrada. Rode "npm install" primeiro.');
  process.exit(1);
}
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);
console.log('vendor/qrcode.js criado a partir de', src);
