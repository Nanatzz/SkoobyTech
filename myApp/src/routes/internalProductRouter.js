const express = require('express');
const router = express.Router();

router.get('/curso', (req,res) => res.render('internalProduct'))

module.exports = router;