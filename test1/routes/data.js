const path = require('path');

const express = require('express');

const dataController = require('../controllers/data');

const router = express.Router();

router.post('/data/add-data',dataController.datapost);

router.get('/data/get-data', dataController.getdata);

router.delete('/data/delete-data/:id',dataController.deletedata)

module.exports=router;