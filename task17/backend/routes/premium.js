const express = require('express');

const purchaseController = require('../controllers/premium');

const authenticatemiddleware = require('../middle/authen');

const router = express.Router();

router.get('/premiummembership', authenticatemiddleware.authenticate,purchaseController.purchasepremium);

router.post('/updatetransactionstatus', authenticatemiddleware.authenticate, purchaseController.updateTransactionStatus)

module.exports = router;