const mongoose = require('mongoose');

const FluencyMetrics = new mongoose.Schema(
  {
    idProfessor: Number,
    idAluno: Number,
    metrica: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('FluencyMetrics', FluencyMetrics);
