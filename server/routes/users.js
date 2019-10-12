const express = require('express');

const userControllers = require('../controllers/usersControllers');

//ROUTER module
const router = express.Router();
router.post('/login', userControllers.checkLogin);


module.exports = router;