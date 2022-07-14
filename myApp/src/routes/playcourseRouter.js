const express = require('express');
const router = express.Router();
const app = require('../../app');

router.get('/playcourse', (req,res) => res.render('playcourse'))

module.exports = router;