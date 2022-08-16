const express = require('express');
const router = express.Router();
const app = require('../../app');

router.get('/login', (req,res) => 
res.render('login'))


module.exports = router;    