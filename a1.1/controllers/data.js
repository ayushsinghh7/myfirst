


const Data=require('../models/data');
exports.datapost= async (req,res)=>{
    try{ 
     const Name=req.body.pro;
  
     const  Price=req.body.price;

     const Cat=req.body.cat;
 
      console.log(Name);
 
     const data=await Data.create({Name:Name,Email:Price,Password:Cat});
     res.status(201).json({newUserDetail:data});
     
 }
  catch(err){
 res.status(500).json({
   error:err
 })
   }
 }
    
