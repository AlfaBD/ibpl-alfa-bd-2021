const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
    tableName: 'Task',
    tableAttributes: {
        tas_id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true,
        }
    },
    buildAssociations: (models) => {
        models.Task.hasMany(models.Answer, { foreignKey: 'tas_id'} );
    }
}