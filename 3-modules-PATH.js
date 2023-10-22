const path = require('path');

// path.join: joins sequence of path segment
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// return a base name for the filePath
const base = path.basename(filePath);
console.log(base);

// return the absolute path, it accepts the sequence of paths or path segments
const absolutePath = path.resolve(
    __dirname,
    'content',
    'subfolder',
    'test.txt'
);
console.log(absolutePath);
