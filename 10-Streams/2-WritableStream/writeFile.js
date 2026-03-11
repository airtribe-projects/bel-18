const fs = require('fs');

const filePath = '../input/output.txt';

const writableStream = fs.createWriteStream(filePath, { encoding: 'utf8' , highWaterMark: 128 });

// writableStream.on('data', (chunk) => {
//     console.log('$$Received chunk$$:', chunk);
// });

writableStream.write("Hello World! \n");

writableStream.write("This is BEL18 \n");

writableStream.on('end', () => {
    console.log('#####################')
    console.log('No more data to write.');
});

writableStream.on('error', (err) => {
    console.error('Error writing file:', err);
});
