// const getInfoDatabase = require('../utils/getInfoDatabase')
const { Students } = require('../models')

const profileUserController = {

 renderProfileUser: (req,res) => {
  const userLogged = req.user 
  res.render('profileUser', {
    user: userLogged
  })
 }
}


module.exports = profileUserController