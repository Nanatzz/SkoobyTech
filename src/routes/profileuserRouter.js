const express = require('express');
const router = express.Router();
// const studentsValidator = require('../middlewares/studentsValidator')
const studentIsLogged = require('../middlewares/studentsValidator')
const profileUserController = require('../controllers/profileUserController');

router.get('/profileUser', profileUserController.renderProfileUser);



module.exports = router;