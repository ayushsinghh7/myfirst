


const Data=require('../models/data');
exports.datapost= async (req,res)=>{
    try{ 
     const Name=req.body.pro;
  
     const  Price=req.body.price;

     const Cat=req.body.cat;
 
      console.log(Name);
 
     const data=await Data.create({Name:Price,Email:Name,Password:Cat});
     res.status(201).json({newUserDetail:data});
     
 }
  catch(err){
    console.log('error')
 res.status(500).json({
   error:err
 })
   }
 }
 exports.getdata=async (req,res)=>{
  try{ 
      const user= await Data.findAll();
      res.status(201).json({all:user})
  }
  catch(err){
      res.status(500).json({
        error:err
      })
  }
};
    
