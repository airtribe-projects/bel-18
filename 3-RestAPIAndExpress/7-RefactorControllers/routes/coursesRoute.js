const express = require('express');
const router = express.Router();
const {getAllCourses, getCourseById, createACourse} = require('../controllers/coursesControllers');

router.get('/', getAllCourses);
router.get('/:courseId', getCourseById);
router.post('/', createACourse);

module.exports = router;
