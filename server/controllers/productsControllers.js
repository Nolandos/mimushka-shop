const Product = require('../models/productsModel');

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
