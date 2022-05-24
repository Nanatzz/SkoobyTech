const express = require('express');
const router = express.Router();

router.get('/finalizacao', (req,res) => res.render('checkout'))

module.exports = router;