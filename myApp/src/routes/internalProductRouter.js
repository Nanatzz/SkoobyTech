const express = require('express');
const router = express.Router();

router.get('/internalProduct', (req,res) => res.render('internalProduct'))

module.exports = router;