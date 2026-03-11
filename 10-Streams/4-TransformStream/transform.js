const { Transform } = require('stream');
const fs = require('fs');

const lowerCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toLowerCase());
        callback();
    }
});

const readableStream = fs.createReadStream('../input/leviathan.txt', { highWaterMark: 128 * 1024 });
const writableStream = fs.createWriteStream('../input/backpressureFile.txt', { highWaterMark: 1 * 1024 });

readableStream
    .pipe(lowerCaseTransform)
    .pipe(writableStream);

writableStream.on('finish', () => {
    console.log('Finished transforming and writing to file.');
});