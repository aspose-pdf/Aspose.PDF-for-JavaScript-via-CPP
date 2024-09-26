console.log('Unpacking WASM assembly...');
const path = require('path');
const fileName = path.join(__dirname,"..","AsposePDFforJS.wasm.zip");
const AdmZip = require("adm-zip");
const zip = new AdmZip(fileName);
zip.extractEntryTo("AsposePDFforJS.wasm", path.join(__dirname, '..'), false, true);
console.log('Unpacking finished.');

if (typeof window === 'undefined') {
  console.log('Warning: This package is intended for browser usage only.');
  console.log('For Node.js environment use Aspose.PDF for Node.js via C++ [https://products.aspose.com/pdf/nodejs-cpp/]');
}