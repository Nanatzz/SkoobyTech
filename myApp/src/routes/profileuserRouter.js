const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController')

router.get('/profileUser', (req,res) => res.render('profileUser'))
router.get('/login', UsersController.index)
router.post('/profileUser', (req,res) => res.render('profileUser'))

module.exports = router;