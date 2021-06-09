const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
    tableName: 'Role',
    tableAttributes: {
        rol_name: {
            primaryKey: true,
            type: DataTypes.STRING,
            unique: true
        }
    },
    buildAssociations: (models) => {}
}