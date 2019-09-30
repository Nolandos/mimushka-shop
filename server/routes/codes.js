const express = require('express');

const codeControllers = require('../controllers/codesControllers');

//ROUTER module
const router = express.Router();

//check discount code
router.get('/codes/:name', codeControllers.checkDiscountCode);

module.exports = router;