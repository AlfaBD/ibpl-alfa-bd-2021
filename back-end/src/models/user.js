const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
    tableName: 'User',
    tableAttributes: {
        usr_id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        usr_cpf: {
            type: DataTypes.STRING
        },
        usr_name: {
            type: DataTypes.STRING
        },
        usr_email: {
            type: DataTypes.STRING
        },
        usr_password_hash: {
            type: DataTypes.STRING
        },
        usr_salt: {
            type: DataTypes.STRING
        },
        usr_birth_date: {
            type: DataTypes.STRING
        },
        usr_last_login: {
            type: DataTypes.DATEONLY
        },
        usr_login_count: {
            type: DataTypes.STRING
        }
    },
    buildAssociations: (models) => {
        models.User.hasMany(models.Answer, { foreignKey: 'usr_id'} );
        models.User.hasMany(models.Question, { foreignKey: 'usr_id'} );
        models.User.hasMany(models.Task, { foreignKey: 'usr_id'} );
        models.User.belongsToMany(models.Class, { foreignKey: 'usr_id', through: models.Attendance} );
        models.User.belongsTo(models.Role, { as: 'primaryRole', foreignKey: 'usr_primary_role'} );
        models.User.belongsTo(models.Role, { as: 'secondaryRole', foreignKey: 'usr_secondary_role'} );
    }
}