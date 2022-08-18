const express = require('express');
const router = express.Router();
const app = require('../../app');
const studentsController = require('../controllers/studentsController');

router.get('/login', studentsController.renderLogin);
router.post('/login', studentsController.loginStudents);



module.exports = router;    
