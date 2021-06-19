const { Sequelize, DataTypes } = require("sequelize")

module.exports = {
  tableName: "Class",
  tableAttributes: {
    cla_id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
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
      as: "schoolUserId",
      foreignKey: "school_user_id",
    })
    models.Class.belongsTo(models.User, {
      as: "teacherUserId",
      foreignKey: "teacher_user_id",
    })
    models.Class.belongsTo(models.School, {
      as: "school",
      foreignKey: "sch_id",
    })
  },
}
