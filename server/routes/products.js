const express = require('express');

const productControllers = require('../controllers/productsControllers');
const multer = require("multer");

const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function(req, file, cb){
       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    }  
 });
 
 const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
 }).single("myImage");
 console.log('upload',upload)
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
//Upload image on server
router.post('/products/image/upload', productControllers.uploadImage);



module.exports = router;