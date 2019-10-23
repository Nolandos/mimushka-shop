const Product = require('../models/productsModel');
const path = require('path');
const uuid = require('uuid');

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
      return res.status(400).json('Brak obrazka');
    }
  
    const file = req.files.file;
    const newFileName = uuid();
    const fileExtension = req.files.file.name.slice(req.files.file.name.lastIndexOf('.'));

    const savePath = path.join(__dirname, '../assets/images', `${newFileName}${fileExtension}`);

    file.mv(savePath, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      res.json({ fileName: `${newFileName}${fileExtension}`});
    });
  } catch(e) {
    res.status(500).send(e);
  } 
}

exports.addNewProduct = async (req, res) => {
  try {
    let product = req.body; 
    
    if (product.name === '') res.status(400).json('Brak Nazwy');
    if (product.description === '') res.status(400).json('Brak Opisu');
    
    product.price = parseInt(product.price);
    product.id = uuid();

    let newProduct = new Product(product);
    res.status(200).json(await newProduct.save());  
  } catch(e) {
    res.status(500).send(e);
  }
}

exports.updateSingleProduct = async (req, res) => {
  try {
    const updateProduct = await Product.updateOne(
      { id: req.params.id },
      { $set: 
        {
          name: req.body.name,
          price: req.body.price,
          amount: req.body.amount,
          image: req.body.image,
          description: req.body.description,
          additionalInfo: req.body.additionalInfo
        }
      }, { runValidators: true } 
    );
    res.status(200).json(updateProduct);
  } catch(e) {
    res.status(500).send(e);
  }
}
