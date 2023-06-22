


const Data=require('../models/data');
var bcrypt=require('bcrypt');
var j=require('jsonwebtoken');
function isstringinvalid(string){
  if(string == undefined ||string.length === 0){
      return true
  } else {
      return false
  }
}
const datapost= async (req,res)=>{
    try{ 
     const Email=req.body.pro;
  
     const  Name=req.body.price;

     const Password=req.body.cat;
 
      console.log(Name);
      const saltrounds=10;
     bcrypt.hash(Password,saltrounds,async(err,hash)=>{

     //const data=await Data.create({Name:Price,Email:Name,Password:Cat+hash});
     await Data.create({Name,Email,Password:hash,TotalExpense:0});

     //res.status(201).json({newUserDetail:data});
     res.status(201).json({message:"sucessfully created new user"});
    })
     
     
 }
  catch(err){
    console.log('error')
 res.status(500).json({
   error:err
 })
   }
 }
//  exports.getdata=async (req,res)=>{
//   try{ 
//       const user= await Data.findAll();
//       res.status(201).json({all:user})
//   }
//   catch(err){
//       res.status(500).json({
//         error:err
//       })
//   }
// };
     const generatetoken=(id,Name,ispremiumuser)=>{
  return j.sign({batumId:id,Name:Name,ispremiumuser},'secretkey')
}
const login = async (req, res) => {
  try{
  const Email=req.body.Email;
  const Password=req.body.Password;

  console.log(req.body.Email)
  if(isstringinvalid(Email) || isstringinvalid(Password)){
     return res.status(400).json({message: 'EMail idor password is missing ', success: false})
  }
  console.log(Password);
  const user  = await Data.findAll({ where : { Email }})
      if(user.length > 0){
         bcrypt.compare(Password, user[0].Password, (err, result) => {
         if(err){
          throw new Error('Something went wrong')
       
         }
          if(result === true){
              return res.status(200).json({success: true, message: "User logged in successfully",token:generatetoken(user[0].id,user[0].Name,user[0].ispremiumuser)})
          }
          else{
          return res.status(200).json({success: false, message: 'Password is incorrect'})
         }
      })
      } else {
          return res.status(404).json({success: false, message: 'User Doesnot exitst'})
      }
  }catch(err){
      res.status(500).json({message: err, success: false})
  }
}
module.exports={
  datapost,
  login,
  generatetoken
  
}