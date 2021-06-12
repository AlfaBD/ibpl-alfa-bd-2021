const mongoose = require('mongoose');

const FluencyMetrics = new mongoose.Schema(
  {
    idProfessor: Number,
    idAluno: Number,
    nota: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('FluencyMetrics', FluencyMetrics);
