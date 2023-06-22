//const Expense = require('../models/expense');
const Expenses = require('../models/expense');
const Data=require('../models/data');

exports.addexpense = async (req, res) => {
    console.log(req.body.Expense)
    
    
    try{
    const { Expense, Desc, cat } = req.body;
//console.log(batumId);
    if(Expense == undefined || Expense.length === 0 ){
       
        return res.status(400).json({success: false, message: 'Parameters missing'})
    }
    
    const data=await Expenses.create({ Expense, Desc, cat,batumId:req.user.id}) ;
    const totalexpense=Number(req.user.TotalExpense)+Number(Expense);
 await Data.update({TotalExpense:totalexpense},{where :{id:req.user.id}})
       // Promise.all(totalexpense,u).then(()=>{
        res.status(201).json({newUserDetail:data})     
       // })
    
        //return res.status(201).json({Expense, success: true } );
    
    }
    catch(err) {
         console.log(err)
        return res.status(500).json({success : false, error: err})
       
    }
}

exports.getexpense = async (req, res)=> {
    
   
    try{ 
       var all=await Expenses.findAll({ where : { batumId: req.user.id}})
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
           
           var t= await Expenses.destroy({where: { id: expenseid, batumId: req.user.id }})
           await Data.update()
                if(t === 0){
                    return res.status(404).json({success: false, message: 'Expense doenst belong to the user'})
                }
                
                return res.status(200).json({ success: true, message: "Deleted Successfuly"})
                
            }catch(err){
                console.log(err);
                return res.status(500).json({ success: true, message: "Failed"})
            }
        }
    