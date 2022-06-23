const getInfoDatabase = require('../utils/getInfoDatabase');
const { validationResult } = require('express-validator')

const users = getInfoDatabase('users')

const UsersController = {
 index: (req,res) => {
  res.render('profileUser', {
   users
  })
 },
 renderLogin: (req,res) => {
  res.render('login')
 },
 loginUsers: (req,res) => {
  const { email, senha } = req.body;
  const usuario = users.find(user => user.email == email)

  if (!usuario){
   res.render('login', {error: "Usuário ou senha incorretos"})
  }

  if(usuario.password !== senha){
   res.render('login', {error: "Usuário ou senha incorretos"})
  }

  res.redirect('/profileUser')
 }
}

module.exports = UsersController