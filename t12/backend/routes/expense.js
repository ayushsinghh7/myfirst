const path = require('path');

const express = require('express');

const expenseController = require('../controllers/expense');
const auth=require('../middle/authen');

const router = express.Router();



router.post('/addexpense',auth.authenticate,expenseController.addexpense )

router.get('/getexpense',auth.authenticate,expenseController.getexpense )
router.delete('/deleteexpense/:expenseid',auth.authenticate , expenseController.deleteexpense)


module.exports=router;