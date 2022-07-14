const getInfoDatabase = require('../utils/getInfoDatabase');

function auth (req,res,next){
 
  if (!userExist) return res.redirect('/login');
 
  res.redirect('/profileUser');
  next();
 }

 module.exports = auth;