// const getInfoDatabase = require('../utils/getInfoDatabase')
const { Students } = require('../models')

const studentsController = {
 index: async (req,res) => {
const students = await Students.findAll()

  res.render('login', {
   students
  })
 },

 renderLogin: (req,res) => {
  res.render('login')
 },

 loginStudents: (req,res) => {
  const { id_aluno, email, senha } = req.body;
  const students = Students.findAll()

  if (!students){
    res.render('login', {error: "Usuário ou senha incorretos"})
  }

  if(students.id_aluno !== id_aluno && students.password !== senha && students.email !== email){
   res.render('login', {error: "Usuário ou senha incorretos"})
  }
  res.render('profileUser')
 }
}

module.exports = studentsController
