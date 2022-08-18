const express = require('express');
const coursesController = require ('../controllers/coursesController')
const router = express.Router();

router.get('/courses', coursesController.index)
router.get('/detailcourse/:id', coursesController.detailsCourse)
router.get('/course-list', coursesController.index)

module.exports = router;