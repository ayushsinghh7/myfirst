const Expense = require('../models/expense');
const Expenses = require('../models/expense');

exports.addexpense = async (req, res) => {
    console.log(req.body.Expense)
    
    
    try{
    const { Expense, Desc, cat } = req.body;
//console.log(batumId);
    if(Expense == undefined || Expense.length === 0 ){
       
        return res.status(400).json({success: false, message: 'Parameters missing'})
    }
    
    const data=await Expenses.create({ Expense, Desc, cat}) ;
     res.status(201).json({newUserDetail:data});
        //return res.status(201).json({Expense, success: true } );
    
    }
    catch(err) {
         console.log(err)
        return res.status(500).json({success : false, error: err})
       
    }
}

exports.getexpense = async (req, res)=> {
    
   
    try{ 
              const user= await Expense.findAll();
              res.status(201).json({all:user})
          }
          catch(err){
              res.status(500).json({
                error:err
              })
          }
        };
    