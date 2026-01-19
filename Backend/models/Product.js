// Copyright (c) 2026 shaikabdulsajidali
// Licensed under the MIT License
// See LICENSE file in the project root for full license text



const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String, 
});

module.exports = mongoose.model('Product', productSchema);
