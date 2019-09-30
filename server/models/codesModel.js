const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Code = new Schema({
  id: { type: 'String', required: true },
  name: { type: 'String', required: true },
  discount: {type: 'Number', required: true}
});

module.exports = mongoose.model('Code', Code);