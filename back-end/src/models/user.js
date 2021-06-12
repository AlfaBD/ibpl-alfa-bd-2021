const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const config = require('../config');

module.exports = {
  tableName: 'User',
  tableAttributes: {
    usr_id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    usr_cpf: {
      type: DataTypes.STRING,
      unique: true,
    },
    usr_name: {
      type: DataTypes.STRING,
    },
    usr_email: {
      type: DataTypes.STRING,
    },
    usr_password_hash: {
      type: DataTypes.STRING,
    },
    usr_birth_date: {
      type: DataTypes.STRING,
    },
    usr_last_login: {
      type: DataTypes.DATEONLY,
    },
    usr_login_count: {
      type: DataTypes.STRING,
    },
  },
  tableOptions: {
    hooks: {
      beforeCreate: async (user) => {
        if (user.usr_password_hash && user.usr_password_hash != '') {
          user.usr_password_hash = await bcrypt.hash(
            user.usr_password_hash,
            config.passwordEncryptSalts
          );
        }
      },
      beforeUpdate: async (user) => {
        if (user.usr_password_hash && user.usr_password_hash != '') {
          user.usr_password_hash = await bcrypt.hash(
            user.usr_password_hash,
            config.passwordEncryptSalts
          );
        }
      },
    },
    instanceMethods: {
      isPasswordValid: function (password) {
        return bcrypt.compareSync(password, this.usr_password_hash);
      },
    },
  },
  buildAssociations: (models) => {
    models.User.hasMany(models.Answer, { foreignKey: 'student_user_id' });
    models.User.hasMany(models.Question, { foreignKey: 'school_user_id' });
    models.User.hasMany(models.Task, { foreignKey: 'school_user_id' });
    models.User.belongsTo(models.Role, {
      as: 'primaryRole',
      foreignKey: 'usr_primary_role',
    });
    models.User.belongsTo(models.Role, {
      as: 'secondaryRole',
      foreignKey: 'usr_secondary_role',
    });
  },
};
