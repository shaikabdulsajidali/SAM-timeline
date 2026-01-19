// Copyright (c) 2026 shaikabdulsajidali
// Licensed under the MIT License
// See LICENSE file in the project root for full license text


const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    name: String,
    email: String,
    image: String,
  },
  cart: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  total: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
