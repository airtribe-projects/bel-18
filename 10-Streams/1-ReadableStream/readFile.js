const fs = require('fs');

const filePath = '../input/leviathan.txt';

const readableStream = fs.createReadStream(filePath, { encoding: 'utf8' , highWaterMark: 128 });

readableStream.on('data', (chunk) => {
    console.log('$$Received chunk$$:', chunk);
});

readableStream.on('end', () => {
    console.log('#####################')
    console.log('No more data to read.');
});

readableStream.on('error', (err) => {
    console.error('Error reading file:', err);
});



// N Users -> N files (1MB)

// All users are concurrently requesting their own file (N MB) <-- fs.readFile

// All users are concurrently requesting their own file (N KB) // Readable Stream I am reading in chunks and one chunk is of 1KB 

// N Users --> 1 file