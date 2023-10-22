// const fs = require('fs');
// fs.readFileSync

const { readFileSync, writeFileSync } = require('fs');

// reading first and the second file
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// node will create the result-sync.txt file & paste the first and second files content
writeFileSync(
    './content/result-sync.txt',
    `here is the result: ${first}, ${second} `,
    { flag: 'a' }
);
