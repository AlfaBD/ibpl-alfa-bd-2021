const config = require('../config');
const { Sequelize } = require('sequelize');

const sequelizeLoader = async ({ env }) => {
    try {
        console.log('[SEQUELIZE LOADER] - Loading sequelize connection with DataBase');

        const databaseConfig = config.databaseConfig;
        const sequelizeConnection = new Sequelize(databaseConfig[env]);

        await sequelizeConnection.authenticate();

        return sequelizeConnection;

    } catch (err) {
        console.error('[SEQUELIZE LOADER] - Error loading sequelize');
        console.error(err)
    }
}

module.exports = sequelizeLoader;