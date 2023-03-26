const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');
const cpntrollerfil=require('../controllers/products')

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product',cpntrollerfil.getAddProduct)

// /admin/add-product => POST
router.post('/add-product', cpntrollerfil.postAddProduct)


module.exports=router;