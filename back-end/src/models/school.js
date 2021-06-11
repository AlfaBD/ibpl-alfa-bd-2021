const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
    tableName: 'School',
    tableAttributes: {
        sch_id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        sch_name: {
            type: DataTypes.STRING
        },
        sch_cnpj: {
            type: DataTypes.STRING,
            unique: true
        },
        sch_mecNumber: {
            type: DataTypes.STRING
        },
        sch_city: {
            type: DataTypes.STRING
        },
        sch_state: {
            type: DataTypes.STRING
        },
        sch_status: {
            type: DataTypes.STRING
        },
        sch_address: {
            type: DataTypes.STRING
        },
        sch_phoneNumber: {
            type: DataTypes.STRING
        },
        sch_email: {
            type: DataTypes.STRING
        }
    },
    buildAssociations: (models) => {
        models.School.hasMany(models.Class, { as: 'school', foreignKey: 'sch_id'});
    }
}