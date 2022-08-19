const express = require('express');
const coursesController = require ('../controllers/coursesController')
const router = express.Router();

router.get('/courses/detail/:id', coursesController.detailsCourse)

module.exports = router;