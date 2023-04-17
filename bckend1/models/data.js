const Sqlize=require('sequelize');
//const sqlize=require('../util/database');
const sequelize = require('../util/database');



const data=sequelize.define('data',{            //products
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
Price:{
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
module.exports=data;