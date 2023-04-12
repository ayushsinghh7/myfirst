// const mysql=require('mysql2');
// const pool=mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'node-complete',
//     password:'nicobabu98265'

// });





// module.exports=pool.promise();

const  Sequilize =require('sequelize');
const sequelize=new Sequilize('node-complete','root','',{dialect:'mysql',host:'localhost'});

module.exports=sequelize;