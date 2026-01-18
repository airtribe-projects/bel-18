const fs = require('fs');

const filePath = "../static/lengthyFile.txt";

const start = Date.now();
const data = fs.readFileSync(filePath, 'utf-8');

console.log(`File reading complete in ${Date.now() - start} ms`);

for (let i=0; i< 10; i++) {
    console.log("Doing work: ", i);
}
