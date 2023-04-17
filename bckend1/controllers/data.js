


const Data=require('../models/data');
exports.datapost= async (req,res)=>{
    try{ 
     const Name=req.body.pro;
  
     const  Price=req.body.price;
 
      console.log(Name);
 
     const data=await Data.create({Name:Name,Price:Price});
     res.status(201).json({newUserDetail:data});
     
 }
  catch(err){
 res.status(500).json({
   error:err
 })
   }
 }
    
 exports.getdata=async (req,res)=>{
     //try{ 
         const user= await Data.findAll();
         res.status(201).json({all:user})
    // }
    // catch(err){
     //    res.status(500).json({
        //   error:err
       //  })
    // }
 };

 exports.deletedata=async(req,res)=>{
   try{
     const proid=req.params.id;
     console.log(proid);
   await Data.destroy({where:{id:proid}});
   res.sendStatus(200);
   }
  catch(err){
   res.status(500).json({
     error:err
   })
 }
 }