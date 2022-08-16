module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define('Courses', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false
        },
        professor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duracao: {  
            type: DataTypes.TIME,
            allowNull: false
        },
        preco: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, { tablename: 'courses' })

    return Courses
}

// const Sequelize = require("sequelize");
// const db = require('./db');

// const courses =  db.define("course", {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     category: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     professor: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     descricao: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     duracao: {
//         type: Sequelize.TIME,
//         allowNull: false
//     },
//     PRICE: {
//         type: Sequelize.BOOLEAN,
//         allowNull: false
//     }

// })

// courses.sync

// module.exports =  courses;