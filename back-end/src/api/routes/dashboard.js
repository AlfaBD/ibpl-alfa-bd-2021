const router = require('express');
const dashboardController = require('../../controllers/DashboardController');
const route = router();
const tokenAuth = require('../middlewares/token-auth');

module.exports = (app) => {
  app.use(tokenAuth());

  app.use('/dashboard', route);

  route.get('/fluencymetrics', dashboardController.fluencymetrics);

  route.get('/countmetrics', dashboardController.countmetrics);

  route.get('/datemetrics', dashboardController.datemetrics);
};
