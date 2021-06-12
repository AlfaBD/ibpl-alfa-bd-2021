const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
  tableName: 'Class',
  tableAttributes: {
    cla_id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    cla_name: {
      type: DataTypes.STRING,
    },
    cla_status: {
      type: DataTypes.STRING,
    },
  },
  buildAssociations: (models) => {
    models.Class.belongsTo(models.User, {
      as: 'schoolUserId',
      foreignKey: 'school_user_id',
    });
    models.Class.belongsTo(models.User, {
      as: 'teacherUserId',
      foreignKey: 'teacher_user_id',
    });
  },
};
