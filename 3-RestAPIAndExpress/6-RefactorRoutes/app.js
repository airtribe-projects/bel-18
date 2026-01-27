const express = require('express');
require('dotenv').config();
const app = express();
const logger = require('./middlewares/loggerMiddleware');
const coursesRoute = require('./routes/coursesRoute');
app.use(logger)
app.use(express.json());

// Mounting a route
app.use('/api/v1/courses', coursesRoute);

app.get('/', (req, res) => {    
    // logger(req, res);    
    res.send("Hello World!");
})

const PORT = process.env.PORT || 3000;
console.log(process.env.PORT);
app.listen(PORT, () => {
    console.log("Express application started on port", PORT);
    // console.log(process.env);
});
