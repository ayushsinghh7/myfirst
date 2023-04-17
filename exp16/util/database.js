


const { Sequelize } = require("sequelize");
//const Sequelize=require('sequelize');



//const  Sequilize =require('sequelize');

const sequelize=new Sequelize('node-complete','root','',{dialect:'mysql',host:'localhost'});

const  Sequilize =require('sequelize');
const sequelize=new Sequilize('node-complete','root','',{dialect:'mysql',host:'localhost'});


module.exports=sequelize;
