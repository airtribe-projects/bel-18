const courses = require("../models/coursesModel");

const getAllCourse =  () => {
    
    // return courses[0];
    // for (let i=0; i < 1000; i++) {
    //     courses.find();
    // }
    
    return courses.find();
}

const getACourse =  (courseId) => {
    // throw new Error("Course is not found");
    
    const course = courses.findById(parseInt(courseId));
    
    
    return course;
}

const createACourse =   (course) => {
    return courses.create(course);;
}

module.exports = {getAllCourse, getACourse, createACourse};