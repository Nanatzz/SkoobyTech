const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('skooby_tech', 'root', '96d0f4*96*JAMES', {
  host: 'localhost',
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize
