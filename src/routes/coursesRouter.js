const express = require('express');
const coursesController = require ('../controllers/coursesController')
const router = express.Router();



router.get('/', (req,res) => res.render('courses'))

router.get('/courses', coursesController.index)
router.get('/detailcourse/:id', coursesController.details)
// // router.get('/edit/:id', coursesController.edit)
// router.patch('/edit/:id', coursesController.update)





module.exports = router