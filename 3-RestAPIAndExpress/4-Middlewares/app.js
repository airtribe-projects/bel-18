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

// DRY
const logger = (req, res, next) => {
    console.log("Received Request with ", req.method, " on ", req.url); 
    next();
}


const logger2 = (req, res, next) => {
    console.log("[Logger 2]: Received Request with ", req.method, " on ", req.url);
    next();
}

const logger3 = (req, res, next) => {
    console.log("[Logger 3]: Received Request with ", req.method, " on ", req.url);
    next();
}

app.use(logger);



app.get('/api/v1/courses',  [ logger, logger2, logger3 ],  (req, res) => {
    console.log(req.query);
    res.send(courses);
});

// path params
app.get('/api/v1/courses/:courseId', logger, logger2, logger3, (req, res) => {
    logger(req, res);

    const courseId = parseInt(req.params.courseId);
    const course = courses.find(c => c.id === courseId);
    
    if (!course) {
        res.status(404).send("Course not found");
    }
    res.send(course);
});

app.use(logger3);

app.get('/', [logger, logger2], (req, res) => {
    // logger(req, res);    
    res.send("Hello World!");
})

app.listen(3000, () => {
    console.log("Express application started");
});


// Packet: Url