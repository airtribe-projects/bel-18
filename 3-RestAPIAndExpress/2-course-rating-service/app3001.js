const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log("Request received on port 3001 /");
    res.send("Hello World! 3001");
})

app.listen(3001, () => {
    console.log("Express application started");
});



