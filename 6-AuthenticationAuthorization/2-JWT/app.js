const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose'); 
const uri = process.env.MONGODB_URI;

const app = express();
const logger = require('./middlewares/loggerMiddleware');
const coursesRoute = require('./routes/coursesRoute');
const usersRoute = require('./routes/usersRoute');

app.use(logger)
app.use(express.json());

// Mounting a route
app.use('/api/v1/courses', coursesRoute);
app.use('/api/v1/users', usersRoute);

app.get('/', (req, res) => {    
    // logger(req, res);    
    res.send("Hello World!");
})

const PORT = process.env.PORT || 3000;
console.log(process.env.PORT);

// Bootstraping, Cascading failures
// const dependencies = [mongoose.connect(uri), /*Redis.connect, // Kafka.connect*/];

// Promise.all(dependencies)
//     .then(() => {
//         console.log("All dependencies resolved");
//         app.listen(PORT, () => {
//             console.log("Express application started on port", PORT);
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });


mongoose.connect(uri).then(() => {
    console.log("Connected to MongodDB via Mongoose");
    app.listen(PORT, () => {
        console.log("Express application started on port", PORT);
    });
})

