const express = require('express');
const router = express.Router();
const courses = require('../models/coursesModel');

router.get('/', (req, res) => {
    console.log(req.query);
    res.send(courses);
});

// path params
router.get('/:courseId', (req, res) => {
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

router.post('/', (req, res) => {
    const course = req.body;
    console.log("Course received", course);
    res.send(course);
});

module.exports = router;
