const Sqlize=require('sequelize');
//const sqlize=require('../util/database');
const sequelize = require('../util/database');



const User=sequelize.define('users',{            //products
id:{
type:Sqlize.INTEGER,
autoIncrement:true,
allowNull:false,
primaryKey:true
},
Name:Sqlize.STRING,
Email:{
  type:Sqlize.STRING,
   allowNull:false,
 unique:true
},
Phonenumber:{
  type:Sqlize.INTEGER,
   allowNull:false,
  unique:true
}
// },
// description:{
//   type:Sqlize.STRING,
//   allowNull:false
// }


});
module.exports=User;


  