const Product = require('../models/productsModel');
<<<<<<< HEAD
var fs = require('fs');
var formidable = require('formidable'); //Moduł do obsługi zapytań formularza
=======
const path = require('path');
const uuid = require('uuid');
>>>>>>> Add import image on server with random name

exports.getProducts = async (req, res) => {

    try {
      res.status(200).json(await Product.find());
    } catch(err) {
      res.status(500).json(err);
    }

};

// Get products by range
exports.getProductsByRange = async function (req, res) {

  try {
    let { startAt, limit } = req.params;

    startAt = parseInt(startAt);
    limit = parseInt(limit);

    const products = await Product.find().skip(startAt).limit(limit);
    const amount = await Product.countDocuments();

    res.status(200).json({
        products,
        amount,
    });

  } catch(err) {
    res.status(500).json(err);
  }

};

exports.getSingleProduct = async (req, res) => {  

  try {
      res.status(200).json(await Product.findOne({id: req.params.id}));
  } catch (err) {
      res.status(500).res.json(err);
  }

};

exports.deleteSingleProduct = async (req, res) => {
  try {
    res.status(200).json(await Product.findOneAndRemove({id: req.params.id}));
  } catch (err) {
    res.status(500).res.json(err);
  }  
}

exports.uploadImage = async (req, res) => {
  try {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
  
    const file = req.files.file;
    const newFileName = uuid();
    const fileExtension = req.files.file.name.slice(req.files.file.name.lastIndexOf('.'));

    const savePath = path.join(__dirname, '../images', `${newFileName}${fileExtension}`);

    file.mv(savePath, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      res.json({ fileName: newFileName, filePath: `/uploads/${newFileName}` });
    });
  } catch(e) {
    res.status(500).send(e);
  } 
}
