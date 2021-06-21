const mongoose = require('mongoose');

const DateMetrics = new mongoose.Schema({
  idSchool: Number,
  metrica: String,
  count: Number,
});

module.exports = mongoose.model('DateMetrics', DateMetrics);
