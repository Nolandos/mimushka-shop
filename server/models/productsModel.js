const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  id: { type: 'String', required: true },
  name: { type: 'String', required: true },
  price: { type: 'String', required: true },
  image: { type: 'String', required: true },
  description: { type: 'String', required: true },
  additionalInfo: { type: 'String', required: false },
});

module.exports = mongoose.model('Product', Product);