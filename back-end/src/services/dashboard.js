const { getDb } = require('../loaders/sequelize');
const FluencyMetrics = require('../schemas/FluencyMetrics');
const CountMetrics = require('../schemas/CountMetrics');
const DateMetrics = require('../schemas/DateMetrics');

module.exports = {
  fluencymetrics: async () => {
    const fluencymetrics = await FluencyMetrics.find({});
    return fluencymetrics;
  },
  countmetrics: async (query) => {
    const { schoolId } = query;
    const countmetrics = await CountMetrics.find().where({
      idSchool: schoolId,
    });
    return countmetrics;
  },
  datemetrics: async (query) => {
    const { schoolId } = query;
    const datemetrics = await DateMetrics.find()
      .where({
        idSchool: schoolId,
      })
      .sort('date');
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
