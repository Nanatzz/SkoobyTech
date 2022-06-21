const getInfoDatabase = require('../utils/getInfoDatabase');
const { validationResult } = require('express-validator')

const usuario = getInfoDatabase('users')

const UsersController = {
 index: (req,res) => {
  res.render('/profileUser', {
   users
  })
 }
}

module.exports = UsersController