const Sqlize=require('sequelize');

const sequelize = require('../util/database');



const cart=sequelize.define('cart',{
id:{
type:Sqlize.INTEGER,
autoIncrement:true,
allowNull:false,
primaryKey:true
}
});

module.exports=cart;