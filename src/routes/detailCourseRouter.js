const express = require('express');
const router = express.Router();

router.get('/course/id', (req,res) => res.render('internalCourse'))

module.exports = router;