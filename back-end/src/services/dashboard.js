const { getDb } = require('../loaders/sequelize');
const FluencyMetrics = require('../schemas/FluencyMetrics');
const CountMetrics = require('../schemas/CountMetrics');
const DateMetrics = require('../schemas/DateMetrics');

module.exports = {
  fluencymetrics: async () => {
    const fluencymetrics = await FluencyMetrics.find({});
    return fluencymetrics;
  },
  countmetrics: async () => {
    const countmetrics = await CountMetrics.find({});
    return countmetrics;
  },
  datemetrics: async () => {
    const datemetrics = await DateMetrics.find({});
    return datemetrics;
  },
  total: async () => {},
  getRatingByStudent: async () => {},
  getRatingByTeacher: async () => {},
  ratings: async () => {},
  ratingAverage: async () => {},
  fluencyMetrics: async () => {},
  fluencyRanking: async () => {},
};
