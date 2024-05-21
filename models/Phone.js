const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Phone = new Schema({
  brand: {
    type: String
    
  },
  model: {
    type: String
    
  },
  serialNumber: {
    type: String

  },
  validFrom: {
    type: String
    
  },
  validUntil: {
    type: String
    
  },
  imageURL: {
    type: String
    
  }
});

module.exports = Phone