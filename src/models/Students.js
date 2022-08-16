
module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define('Students', {
        id_aluno: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, { tablename: 'students' })

    return Students
}

