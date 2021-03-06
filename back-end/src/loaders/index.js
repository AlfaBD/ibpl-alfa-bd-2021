const expressLoader = require('./express');
const { sequelizeLoader } = require('./sequelize');

const loaders = (async = (settings = {}) => {
  const load = async () => {
    try {
      console.log('[LOADERS] - Running loader files');

      //Load express app
      const app = await expressLoader();
      const db = await sequelizeLoader({ env: process.env.NODE_ENV });

      console.log('[LOADERS] - Loader files runned');

      return { app, db };
    } catch (err) {
      console.error('[LOADERS] - Error running loader files');
      console.error(err);
    }
  };

  return {
    load,
  };
});

module.exports = loaders;
