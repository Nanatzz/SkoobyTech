// // const studentsController = require('../controllers/studentsController');
// // const { Students } = require('../models')



// const studentsValidator = {
//   index: async (req, res) => {
//     const students = await Students.findAll()
  
//     res.render('login',{
//         students
//       })
      
//  },

//  renderLogin: (req,res) => {
//   res.render('login')
//  },

//  loginStudents: async (req,res) => {
//   const { email, senha } = req.body;
//   const students =  await Students.findAll()


//   if(students.senha !== senha && students.email !== email){
//    res.render('login', {error: "Usuário ou senha incorretos"})
//   }
//   res.render('/profileUser')
//  }}

//  module.exports = studentsValidator

