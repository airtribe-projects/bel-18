const express = require('express');
const router = express.Router();
const {getAllCourses, getCourseById, createACourse} = require('../controllers/coursesControllers');

const {validateJWT} = require('../middlewares/validateJWT');

router.use(validateJWT);

router.get('/', getAllCourses);
router.get('/:courseId', getCourseById);
router.post('/', createACourse);

module.exports = router;
