const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
  tableName: 'Attendance',
  tableAttributes: {
    att_id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
  },
  buildAssociations: (models) => {
    models.Attendance.belongsTo(models.User, {
      as: 'studentUserId',
      foreignKey: 'student_user_id',
    });
    models.Attendance.belongsTo(models.Class, {
      foreignKey: 'cla_id',
      as: 'classId',
    });
  },
};
