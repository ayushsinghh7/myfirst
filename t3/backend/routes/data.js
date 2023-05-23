const path = require('path');

const express = require('express');

const dataController = require('../controllers/data');

const router = express.Router();

router.post('/data/add-data',dataController.datapost);



module.exports=router;