

const { Sequelize } = require("sequelize");


const sequelize=new Sequelize('practice','root','nicobabu98265',{dialect:'mysql',host:'localhost'});

module.exports=sequelize;
