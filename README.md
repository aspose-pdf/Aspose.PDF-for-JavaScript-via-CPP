# Browser API to Process & Manipulate PDF Files

Add PDF processing, manipulation, and conversion features to your front-end applications.

[Aspose.PDF for JavaScript via C++](https://products.aspose.com/pdf/javascript) allows you to work with PDF documents, pages, text, images, attachments, fonts, security, and signatures.

<p align="center">
  <a title="Download complete Aspose.PDF for JavaScript via C++ code" href="https://releases.aspose.com/pdf/javascriptcpp/new-releases/">
	<img src="https://raw.github.com/AsposeExamples/java-examples-dashboard/master/images/downloadZip-Button-Large.png" />
  </a>
</p>

## PDF Processing

- **Extract text** from PDF pages, including search via regular expressions and hidden text detection.
- **Add or extract images** to and from PDF documents; remove or replace images when needed.
- **Concatenate**, **split**, or **reorganize** PDF files; delete specific or blank pages.
- **Linearize** PDF documents for web optimization and **optimize** internal structure and resources.
- **Convert** PDF documents to:
  - **Office formats:** DOC, DOCX, XLS, XLSX, PPTX, DOCX with Enhanced Recognition Mode
  - **Web formats:** SVG, SVG (ZIP), XPS, EPUB
  - **Image formats:** JPEG, PNG, BMP, TIFF, DICOM
  - **Other formats:** Grayscale PDF, PDF/A, TeX, TXT, Markdown
- **Manipulate** PDF structure and content:
  - Bookmarks, hyperlinks, annotations, attachments, JavaScript
  - Fonts, metadata, layers, background color
- **Secure PDF documents**:
  - Encrypt, decrypt, set or change passwords
  - Configure access permissions
- **Digitally sign** PDFs using PKCS#7, validate and remove signatures.
- **Add or remove** watermarks, stamps, page numbers, headers/footers, background images.
- **Flatten** PDF documents (forms, annotations, layers).
- **Create booklets** or generate **N-Up layouts**.
- **Export form data** (AcroForm) to FDF, XFDF, XML.
- **Validate** and **convert** to/from **PDF/A** format.

## Read & Write PDF & Other Formats

**Fixed Layout Support:**
- PDF, PDF/A

**Save/Export As:**
- **Office:** DOC, DOCX, XLS, XLSX, PPTX
- **Images:** JPEG, PNG, BMP, TIFF, DICOM
- **Other:** EPUB, SVG, SVG (ZIP), TeX, TXT, Grayscale PDF, PDF/A, XPS

**Input Formats:**
- TXT, Images (JPEG/PNG/BMP/TIFF)

## Advanced Features

- **Fonts:** List, embed/unembed, and replace fonts in PDF files.
- **Metadata:** Set, extract, or remove metadata.
- **Layers:** Get list of layers, merge or flatten them.
- **Forms & Annotations:**
  - Delete annotations, bookmarks, JavaScript
  - Flatten forms
- **Attachments:** Add, extract, or delete file attachments.
- **Text Tools:**
  - Find, replace, or delete text (including hidden text)
  - Get word and character counts

## Additional Utilities

- **Repair** corrupted or damaged PDF files.
- **Generate PDF** from TXT or image files.
- **Optimize** document resources and structure.
- **Product diagnostics**: retrieve library info, version, and capabilities.

## Platform Independence

Aspose.PDF for JavaScript via C++ is a WebAssembly-based library that can be used to create applications in any browser that supports this technology.
The library was written in C++ and does not require additional runtime environments.

## Getting Started with Aspose.PDF for JavaScript via C++

Are you ready to give Aspose.PDF for JavaScript via C++ a try?

- Execute `npm install git+https://github.com/aspose-pdf/Aspose.PDF-for-JavaScript-via-CPP` in Terminal in Visual Studio Code or in another console.
- You can also add one line in `dependency` section of `package.json` manually

```json
"dependencies": {
    "some-package": "link",
    "aspose-pdf-js": "github:aspose-pdf/Aspose.PDF-for-JavaScript-via-CPP",
    "another-package": "link"
  }
```

## Setting up

- Rename `setting.json.default` into `settings.json`
- Add desired values into `settings.json`
- Put `arial.ttf` and `times.ttf` into `fonts` folder

You need to use `encrypt_lic.html` to get an encrypted license file for running in full-featured mode.

## Extract Text From Whole PDF

```js
// Add this function as handler for file-upload element
var ffileExtract = function (e) {
      const file_reader = new FileReader();
      file_reader.onload = (event) => {
        /*Extract text from a PDF-file*/
        const json = AsposePdfExtractText(event.target.result, e.target.files[0].name);
        if (json.errorCode == 0) document.getElementById('output').textContent = json.extractText;
        else document.getElementById('output').textContent = json.errorText;
      };
      file_reader.readAsArrayBuffer(e.target.files[0]);
    };
```

## Save PDF as Office Formats

One of the most popular features of Aspose.PDF for JavaScript via C++ is to convert PDF documents to other formats without needing to understand the underlying structure of the resultant format.

Give the following snippet a try with your samples:

```js
// Add this function as handler for file-upload element
var ffileToDocX = function (e) {
    const file_reader = new FileReader();
    file_reader.onload = (event) => {
      /*convert a PDF-file to DocX and save the "ResultPDFtoDocX.docx"*/
      const json = AsposePdfToDocX(event.target.result, e.target.files[0].name, "ResultPDFtoDocX.docx");
      if (json.errorCode == 0) document.getElementById('output').textContent = json.fileNameResult;
      else document.getElementById('output').textContent = json.errorText;
      /*make a link to download the result file*/
      DownloadFile(json.fileNameResult, 
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
    }
    file_reader.readAsArrayBuffer(e.target.files[0]);
  }
```

[Home](https://www.aspose.com/) | [Product Page](https://products.aspose.com/pdf/javascript-cpp) | [Docs](https://docs.aspose.com/pdf/javascript-cpp/) | [Demos](https://products.aspose.app/pdf/family) | [API Reference](https://apireference.aspose.com/pdf/javascript-cpp) | [Examples](https://github.com/aspose-pdf/aspose-pdf-js) | [Blog](https://blog.aspose.com/category/pdf/) | [Search](https://search.aspose.com/) | [Free Support](https://forum.aspose.com/c/pdf) |  [Temporary License](https://purchase.aspose.com/temporary-license)
