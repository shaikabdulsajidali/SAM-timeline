// Copyright (c) 2026 shaikabdulsajidali
// Licensed under the MIT License
// See LICENSE file in the project root for full license text


const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  image: String,
});

module.exports = mongoose.model('Admin', adminSchema);
