// const getInfoDatabase = require('../utils/getInfoDatabase')
const { Students } = require('../models');

const studentsController = {

 renderLogin: (req,res) => {
  res.render('login')
 },

 loginStudents: (req,res) => {
  const { email, senha } = req.body;
  Students.findOne({where: {email} }).then(user => {
    if (!user){
      alert("Usuário ou senha incorretos");
      res.redirect('/login')
    }
    if (user.senha !== senha) {
      alert("Usuário ou senha incorretos");
      res.redirect('/login')
    } 

    res.cookie('user', JSON.stringify({
      id: user.id_aluno,
      nome: user.nome,
      email: user.email 
    }))
    res.redirect('/profileUser')
  })
  
 }
}

module.exports = studentsController
