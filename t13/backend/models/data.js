const Sqlize=require('sequelize');
//const sqlize=require('../util/database');
const sequelize = require('../util/database');



const data=sequelize.define('bata',{            //products
id:{
type:Sqlize.INTEGER,
autoIncrement:true,
allowNull:false,
primaryKey:true
},

Name:{
  type:Sqlize.STRING,
   allowNull:false,
 
},
Email:{
  type:Sqlize.STRING,
   allowNull:false,
  unique:true
},
Password:{
  type:Sqlize.STRING,
  allowNull:false},

ispremiumuser: Sqlize.BOOLEAN,
TotalExpense:{
  
  type:Sqlize.INTEGER,
  defaultValue:0,
}
// defaultValue:0,
 // }
// },
// description:{
//   type:Sqlize.STRING,
//   allowNull:false
// }


});
module.exports=data;