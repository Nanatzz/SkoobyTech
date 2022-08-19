// // const getInfoDatabase = require('../utils/getInfoDatabase')
// const { Students } = require('../models')



// const NewStudentController = {
//   index: async (res, req) => {
//     const { nome, email, senha } = req.body
//     const user = await Students.findOne({where: {email}});
//     const { error } = cadastroValidador.validate(req.body, {abortEarly: false});

//     if (error) {
//         res.redirect('cadastro', {errors: error.details});
//     }
//     const body = {
//         nome,
//         email,
//         senha: bcrypt.hashSync(senha, 10)
//     }
//     const newUser = await Students.create(body).then(() => {
//         res.redirect("/login")
//     }).catch(error = res.send(error))
//    }
// }

// module.exports = newStudentController