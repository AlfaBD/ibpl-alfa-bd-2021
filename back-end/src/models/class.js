const { Sequelize, DataTypes } = require("sequelize")

module.exports = {
<<<<<<< HEAD
  tableName: "Class",
  tableAttributes: {
    cla_id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
=======
  tableName: 'Class',
  tableAttributes: {
    cla_id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
>>>>>>> develop
    },
    cla_name: {
      type: DataTypes.STRING,
    },
    cla_status: {
      type: DataTypes.STRING,
    },
  },
  buildAssociations: (models) => {
<<<<<<< HEAD
    models.Class.belongsToMany(models.User, {
      foreignKey: "cla_id",
      through: models.Attendance,
    })
    models.Class.belongsTo(models.School, {
      foreignKey: "sch_id",
      as: "school",
    })
  },
}
=======
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
>>>>>>> develop
