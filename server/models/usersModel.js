const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    id: {type: 'String', required: true},
    login: { type: 'String', required: true },
    password: { type: 'String', required: true },
    date: { type: 'Date', default: Date.now }
  });
  
  module.exports = mongoose.model('User', User);