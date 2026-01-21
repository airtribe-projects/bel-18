const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log("Request received on /");
    res.send("Hello World!");
})

app.listen(3000, () => {
    console.log("Express application started");
});

