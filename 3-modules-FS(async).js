/**
 * in asynchronous we need to provide the callback. means we run callback when we are done.
 * so when whatever functionality we are doing is complete then we run that callback
 */

const { readFile, writeFile } = require('fs');

// read first file
readFile('./content/first.txt', 'utf-8', (err, result) => {
    // if there is error while reading file, then just return
    if (err) {
        console.log(err);
        return;
    }

    const first = result;
    // read second file
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            return;
        }
        const second = result;

        // write the result
        writeFile(
            './content/result-async.txt',
            `here is the result for async read and write file: ${first}, ${second}`,
            { flag: 'a' },
            (err, result) => {
                if (err) {
                    console.log('error while writing to a file: ', err);
                    return;
                }
                console.log('RESULT FROM WRITE FILE: ', result);
            }
        );
    });
});
