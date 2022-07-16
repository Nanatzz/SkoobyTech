const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');

router.get('/profileUser', UsersController.index);
router.get('/login', UsersController.renderLogin);
router.post('/login', UsersController.loginUsers);

module.exports = router;