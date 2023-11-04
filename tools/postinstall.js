console.log('Unpacking WASM assembly...');
const path = require('path');
const fileName = path.join(__dirname,"..","AsposePDFforJS.wasm.zip");
const AdmZip = require("adm-zip");
const zip = new AdmZip(fileName);
zip.extractEntryTo("AsposePDFforJS.wasm", path.join(__dirname, '..'), false, true);
console.log('Unpacking finished.');