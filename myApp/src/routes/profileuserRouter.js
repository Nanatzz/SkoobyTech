const express = require('express');
const router = express.Router();

router.get('/profileUser', (req,res) => res.render('profileUser'))

module.exports = router;