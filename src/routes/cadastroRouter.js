const express = require('express');
const router = express.Router();
const app = require('../../app');
const newStudentController = require('../controllers/profileUserController');

router.get('/cadastre', (req,res) => res.render('cadastre'))

module.exports = router;