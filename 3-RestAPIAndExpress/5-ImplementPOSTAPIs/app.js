const express = require('express');
require('dotenv').config();
const app = express();

// app.use(body-parser())
app.use(express.json());

const courses = [
    {
        id: 1,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 2,
        name: 'React.js',
        rating: 4.5,
        description: "Learn React js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 3,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    }
]

// DRY
const logger = (req, res, next) => {
    console.log("Received Request with ", req.method, " on ", req.url); 
    next();
}

app.use(logger);

app.get('/api/v1/courses', (req, res) => {
    console.log(req.query);
    res.send(courses);
});

// path params
app.get('/api/v1/courses/:courseId', (req, res) => {
    const courseId = parseInt(req.params.courseId);
    const course = courses.find(c => c.id === courseId);
    
    if (!course) {
        res.status(404).send("Course not found");
    }
    res.send(course);
});

/* How to send Post request
- Postman
- cURL
- Wget

*/

app.post('/api/v1/courses', (req, res) => {
    const course = req.body;
    console.log("Course received", course);
    res.send(course);
});


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
