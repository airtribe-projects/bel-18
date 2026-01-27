const courses = require('../models/coursesModel');

const getAllCourses = (req, res) => {
    console.log(req.query);
    res.send(courses);
};

const getCourseById = (req, res) => {
    const courseId = parseInt(req.params.courseId);
    const course = courses.find(c => c.id === courseId);
    
    if (!course) {
        res.status(404).send("Course not found");
    }
    res.send(course);
};

const createACourse = (req, res) => {
    const course = req.body;
    console.log("Course received", course);
    res.send(course);
};


module.exports = {
    getAllCourses,
    getCourseById,
    createACourse
}