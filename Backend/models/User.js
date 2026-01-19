// Copyright (c) 2026 shaikabdulsajidali
// Licensed under the MIT License
// See LICENSE file in the project root for full license text


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  image: String,
});

module.exports = mongoose.model('User', userSchema);
