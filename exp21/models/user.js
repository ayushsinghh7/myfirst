const Sqlize=require('sequelize');

const sequelize = require('../util/database');



const user=sequelize.define('user',{
id:{
type:Sqlize.INTEGER,
autoIncrement:true,
allowNull:false,
primaryKey:true
},Name:Sqlize.STRING,
Email:Sqlize.STRING
})

module.exports=user;