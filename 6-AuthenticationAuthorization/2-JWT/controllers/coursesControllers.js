const courses = require('../models/coursesModel');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res) => {
    const headers = req.headers || {};
    const token = headers.authorization;

    if (!token) {
        res.status(401).send({message: "Invalid Token"})
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if(!decodedToken) {
        return res.status(401).send({message: "Invalid User"});
    }

    console.log(decodedToken);
    return true;
}

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
    validateJWT(req, res);

    const course = req.body;
    course.id = courses.length;
    courses.push(course);
    res.send(course);
};



module.exports = {
    getAllCourses,
    getCourseById,
    createACourse
}