const config = require('../config');
const fs = require( 'fs' );
const path = require( 'path' );
const { Sequelize } = require('sequelize');
const getModelsConfig = require('../models');

const sequelizeLoader = async ({ env }) => {
    try {
        console.log('[SEQUELIZE LOADER] - Loading sequelize connection with DataBase');

        const databaseConfig = config.databaseConfig;
        const sequelizeConnection = new Sequelize(databaseConfig[env]);

        // Test if the connection was successful
        await sequelizeConnection.authenticate();

        // Define models
        const modelConfigs = getModelsConfig();
        let models = {};

        modelConfigs.forEach(
            ({tableName, tableAttributes}) => 
                models[tableName] = sequelizeConnection.define(tableName, tableAttributes));
        
    
        // Build associaitions
        modelConfigs.forEach(config => config.buildAssociations(models));

        // Sync models with database

        await sequelizeConnection.sync();  

        return sequelizeConnection;

    } catch (err) {
        console.error('[SEQUELIZE LOADER] - Error loading sequelize');
        console.error(err)
    }
}

module.exports = sequelizeLoader;