//const Expense = require('../models/expense');
const Expenses = require('../models/expense');
const Data=require('../models/data');
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
    