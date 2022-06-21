

const getInfoDatabase = require('../utils/getInfoDatabase');


function auth (req,res,next){
  const users = getInfoDatabase('users')
  const { email, password } = req.body
 
  const userExist = users.find(user => {
    return user.email == email && user.password == password
  });
 
  if (!userExist) return res.redirect('/login');
 
  res.redirect('/profileUser');
  next();
 }

 module.exports = auth;