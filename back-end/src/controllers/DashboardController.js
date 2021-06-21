const dashboardService = require('../services/dashboard');

module.exports = {
  async fluencymetrics(request, response) {
    const query = request.query;
    const fluencymetrics = await dashboardService.fluencymetrics(query);
    return response.json(fluencymetrics);
  },
  async countmetrics(request, response) {
    const query = request.query;
    const countmetrics = await dashboardService.countmetrics(query);
    return response.json(countmetrics);
  },
  async datemetrics(request, response) {
    const query = request.query;
    const datemetrics = await dashboardService.datemetrics(query);
    return response.json(datemetrics);
  },
};
