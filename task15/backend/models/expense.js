const Sequelize = require('sequelize');
const sequelize = require('../util/database');



const Expense = sequelize.define('expenses', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Expense: Sequelize.INTEGER,
     Desc: Sequelize.STRING,
    cat: Sequelize.STRING,
   
})

module.exports = Expense;