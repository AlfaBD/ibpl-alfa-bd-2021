const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
    tableName: 'Task',
    tableAttributes: {
        tas_id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4
        }
    },
    buildAssociations: (models) => {
        models.Task.hasMany(models.Answer, { foreignKey: 'tas_id'} );
    }
}