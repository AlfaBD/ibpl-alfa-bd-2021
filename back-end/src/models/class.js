const { Sequelize, DataTypes } = require("sequelize")

module.exports = {
  tableName: "Class",
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
