const express = require('express');

const emailControllers = require('../controllers/emailControllers');

//ROUTER module
const router = express.Router();

//sendEmail
router.post('/send', emailControllers.sendEmail );

module.exports = router;