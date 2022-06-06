const express = require('express');
const router = express.Router();

router.get('/carrinho', (req,res) => res.render('carrinho'))

module.exports = router; 