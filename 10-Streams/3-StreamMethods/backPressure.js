const fs = require('fs');

const readableStream = fs.createReadStream('../input/leviathan.txt', { highWaterMark: 128 * 1024 });

const writableStream = fs.createWriteStream('../input/backpressureFile.txt', { highWaterMark: 1 * 1024 });

readableStream.on('data', (chunk) => {
    const canWrite = writableStream.write(chunk);
    if (!canWrite) {
        console.log("Readable Stream Paused");
        readableStream.pause();
    }
});

writableStream.on('drain', () => {
    console.log("Readable Stream Resumed");
    readableStream.resume();
})

readableStream.on('end', () => {
  console.log('Readable stream ended');
  writableStream.end();
});

readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing file:', err);
});

