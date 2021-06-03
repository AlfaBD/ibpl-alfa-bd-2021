const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
    tableName: 'Attendance',
    tableAttributes: {
        att_id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4
        }
    },
    buildAssociations: (models) => {}
}