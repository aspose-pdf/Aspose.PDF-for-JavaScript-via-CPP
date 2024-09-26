if (typeof window === 'undefined') {
  console.warn(
    '\x1b[33m%s\x1b[0m',
    '\nWarning: This package is intended for browser usage only. Node.js environment detected.',
    '\n\nUse Aspose.PDF for Node.js via C++ [https://products.aspose.com/pdf/nodejs-cpp/]\n\n'
  );
  process.exit(1);
}
