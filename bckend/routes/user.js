const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/user/add-user',userController.datapost);

router.get('/user/get-user', userController.getdata);

router.delete('/user/delete-user/:id',userController.deletedata)

module.exports=router;
