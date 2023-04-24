const Sqlize=require('sequelize');

const sequelize = require('../util/database');



const cartitems=sequelize.define('cartitems',{
id:{
type:Sqlize.INTEGER,
autoIncrement:true,
allowNull:false,
primaryKey:true
},quantity:Sqlize.INTEGER
});

module.exports=cartitems;