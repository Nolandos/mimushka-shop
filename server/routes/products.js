const express = require('express');

const productControllers = require('../controllers/productsControllers');

//ROUTER module
const router = express.Router();

// first "/" is "api/"

//get all products
router.get('/products', productControllers.getProducts );
// get products by range
router.route('/products/range/:startAt/:limit').get(productControllers.getProductsByRange);

module.exports = router;