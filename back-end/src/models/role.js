const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
    tableName: 'Role',
    tableAttributes: {
        rol_id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        rol_name: {
            type: DataTypes.STRING
        }
    },
    buildAssociations: (models) => {
        //models
    }
}