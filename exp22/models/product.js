const Sqlize=require('sequelize');
//const sqlize=require('../util/database');
const sequelize = require('../util/database');



const product=sequelize.define('product',{
id:{
type:Sqlize.INTEGER,
autoIncrement:true,
allowNull:false,
primaryKey:true
},
title:Sqlize.STRING,
price:{
  type:Sqlize.DOUBLE,
  allowNull:false
},
imageUrl:{
  type:Sqlize.STRING,
  allowNull:false
},
description:{
  type:Sqlize.STRING,
  allowNull:false
}


});
module.exports=product;


  