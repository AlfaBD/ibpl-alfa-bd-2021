const createLoaders = require('./loaders');
const config = require('./config');

const startNodeServer = async (settings = {}) => {
  try {
    //Create all loaders to start app loading
    const loaders = createLoaders();

    //Pick the env config port to be used or the default 3000
    const port = config.port || 3000;

    console.log('[APP] - Starting App');

    //Return the app and db instance after all loaders completed
    const { app, db } = await loaders.load();

    //Start app to listen
    app.listen(port, (err) => {
      if (err) console.error('[APP] - Error starting node server listener');
      else console.log(`[APP] - Server listening on port ${port}`);
    });

    console.log('[APP] - App started');
  } catch (err) {
    console.error('[APP] - Error starting node server');
    console.error(err);
  }
};

startNodeServer();

module.exports = startNodeServer;
