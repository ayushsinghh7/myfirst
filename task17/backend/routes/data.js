const path = require('path');

const express = require('express');

const dataController = require('../controllers/data');

const router = express.Router();

router.post('/data/add-data',dataController.datapost);
//router.get('/data/get-data', dataController.getdata);
router.post('/data/sign-in', dataController.login);



module.exports=router;