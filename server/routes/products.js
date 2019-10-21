const express = require('express');

const productControllers = require('../controllers/productsControllers');

//ROUTER module
const router = express.Router();

// first "/" is "api/"

//get all products
router.get('/products', productControllers.getProducts );
//Add products
router.post('/products/add', productControllers.addNewProduct);
// get products by range
router.route('/products/range/:startAt/:limit').get(productControllers.getProductsByRange);
//get single product
router.get('/products/:id', productControllers.getSingleProduct);
//delete single product
router.delete('/products/:id', productControllers.deleteSingleProduct);
//update single product
router.patch('/products/:id', productControllers.updateSingleProduct);
//Upload image on server
router.post('/products/image/upload', productControllers.uploadImage);



module.exports = router;