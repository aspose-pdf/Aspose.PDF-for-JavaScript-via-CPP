if (typeof window === 'undefined') {
  console.warn(
    '\x1b[33m%s\x1b[0m \n\n%s\n\n',
    'Warning: This package is intended for browser usage only. Node.js environment detected.',
    'Use Aspose.PDF for Node.js via C++ [https://products.aspose.com/pdf/nodejs-cpp/]'
  );
  process.exit(1);
}
