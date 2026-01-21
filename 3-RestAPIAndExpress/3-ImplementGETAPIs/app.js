const express = require('express');

const app = express();



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
    
    // console.log(req.params);
    // console.log(req.query);
    res.send(course);
});


// app.get('/api/v1/courses/1', (req, res) => {
//     // console.log(req.query);
//     res.send(courses[1]);
// });


// app.get('/api/v1/courses/2', (req, res) => {
//     // console.log(req.query);
//     res.send(courses[2]);
// });


// Comment



app.get('/', (req, res) => {
    console.log("Request received on /");
    res.send("Hello World!");
})

app.listen(3000, () => {
    console.log("Express application started");
});


// Packet: Url