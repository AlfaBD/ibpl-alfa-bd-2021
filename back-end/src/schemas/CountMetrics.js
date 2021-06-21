const mongoose = require('mongoose');

const CountMetrics = new mongoose.Schema({
  idSchool: Number,
  metrica: String,
  count: Number,
});

module.exports = mongoose.model('CountMetrics', CountMetrics);
