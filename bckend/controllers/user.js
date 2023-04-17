//app.post('/user/add-user'
const User=require('../models/User');


exports.datapost= async (req,res)=>{
    try{ 
     const Name=req.body.name;
     const Email=req.body.email;
     const  Phonenumber=req.body.phonenumber;
 
    
 
     const data=await User.create({Name:Name,Email:Email,Phonenumber:Phonenumber});
     res.status(201).json({newUserDetail:data});
     
 }
  catch(err){
 res.status(500).json({
   error:err
 })
   }
 }
 //app.get('/user/get-user', 
 exports.getdata=async (req,res)=>{
     //try{ 
         const user= await User.findAll();
         res.status(201).json({all:user})
    // }
    // catch(err){
     //    res.status(500).json({
        //   error:err
       //  })
    // }
 };
 //app.delete('/user/delete-user/:id',
 exports.deletedata=async(req,res)=>{
   try{
     const proid=req.params.id;
     console.log(proid);
   await User.destroy({where:{id:proid}});
   res.sendStatus(200);
   }
  catch(err){
   res.status(500).json({
     error:err
   })
 }
 }