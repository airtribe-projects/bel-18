const fs = require('fs');

const filePath = "../static/lengthyFile.txt";

const start = Date.now();
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.log(`Some error occurred: ${err}`);
    }
    console.log(`File reading complete in ${Date.now() - start} ms`);
});

for (let i=0; i< 10; i++) {
    console.log("Doing work: ", i);
}
