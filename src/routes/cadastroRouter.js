const express = require('express');
const router = express.Router();

router.get('/cadastre', (req,res) => res.render('cadastre'))

module.exports = router;