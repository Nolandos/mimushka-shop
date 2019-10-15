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
// get products by range
router.route('/products/range/:startAt/:limit').get(productControllers.getProductsByRange);
//get single product
router.get('/products/:id', productControllers.getSingleProduct);
//delete single product
router.delete('/products/:id', productControllers.deleteSingleProduct);
router.post('/products/image/upload', function (req, res) {
    upload(req, res, function (err) {
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file);//Here you get file.
        /*Now do where ever you want to do*/
        
    })
})

module.exports = router;