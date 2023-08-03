//const Expense = require('../models/expense');
const Expenses = require('../models/expense');
const Data=require('../models/data');
const { BlobServiceClient } = require('@azure/storage-blob');
const { v1: uuidv1} = require('uuid');
const sequl=require('../util/database');

exports.addexpense = async (req, res) => {
   // console.log(req.body.Expense)
   const t= await sequl.transaction()
    
    try{
    const { Expense, Desc, cat } = req.body;
//console.log(batumId);
    if(Expense == undefined || Expense.length === 0 ){
       
        return res.status(400).json({success: false, message: 'Parameters missing'})
    }
    
    const data=await Expenses.create({ Expense, Desc, cat,batumId:req.user.id},{transaction:t}) ;
    const totalexpense=Number(req.user.TotalExpense)+Number(Expense);
 await Data.update({TotalExpense:totalexpense},{where :{id:req.user.id},transaction:t})
       
       await t.commit()
      return  res.status(201).json({newUserDetail:data})     
       
    
       
    
    }
    catch(err) {
         console.log(err)
       await  t.rollback()
        return res.status(500).json({success : false, error: err})
       
    }
}

exports.getexpense = async (req, res)=> {
    
   
    try{ 
       var all=await Expenses.findAll({ where : { batumId: req.user.id}})
       console.log(req.user.TotalExpense)
            return res.status(200).json({all, success: true})
          }
          catch(err){
              res.status(500).json({
                error:err
              })
          }
        };
        exports.deleteexpense = async  (req, res) => {
            try{
            const expenseid = req.params.expenseid;
             console.log(expenseid);
            if(expenseid == undefined || expenseid.length === 0){
                return res.status(400).json({success: false, })
            }
            var y=await Expenses.findByPk(expenseid)
           console.log(y.Expense)
           const j=Number(req.user.TotalExpense)-Number(y.Expense);
           console.log(j)
           var t= await Expenses.destroy({where: { id: expenseid, batumId: req.user.id }})
           
           await Data.update({TotalExpense:j},{where :{id:req.user.id}})
                if(t === 0){
                    return res.status(404).json({success: false, message: 'Expense doenst belong to the user'})
                }
                
                return res.status(200).json({ success: true, message: "Deleted Successfuly"})
                
            }catch(err){
                console.log(err);
                return res.status(500).json({ success: true, message: "Failed"})
            }
        }
        exports.downloadExpenses =  async (req, res) => {

            try {
                if(!req.user.ispremiumuser){
                    return res.status(401).json({ success: false, message: 'User is not a premium User'})
                }
                const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING; 
                
                const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
        
                
        
                const keeper = 'trialexpensetracker'; //this needs to be unique name
        
                console.log('\nCreating container...');
                console.log('\t', keeper);
        
                
                const containerClient = await blobServiceClient.getContainerClient(keeper);
        
                
                if(!containerClient.exists()){
                    
                    const createContainerResponse = await containerClient.create({ access: 'container'});
                    console.log("Container was created successfully. requestId: ", createContainerResponse.requestId);
                }
                
                const extra = 'expenses' + uuidv1() + '.txt';
        
               
                const blockBlobClient = containerClient.getBlockBlobClient(extra);
        
                console.log('\nUploading to Azure storage as blob:\n\t', extra);
        
               
                const data =  JSON.stringify(await req.user.getExpenses());
        
                const uploadBlobResponse = await blockBlobClient.upload(data, data.length);
                console.log("Blob was uploaded successfully. requestId: ", JSON.stringify(uploadBlobResponse));
        
               
                const fileUrl = `../${keeper}/${extra}`;
                res.status(201).json({ fileUrl, success: true}); 
            } catch(err) {
                res.status(500).json({ error: err, success: false, message: 'Something went wrong'})
            }
        
        };
        
    