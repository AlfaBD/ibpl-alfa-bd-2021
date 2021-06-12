const { getDb } = require('../loaders/sequelize');

module.exports = {
  getAllClasses: async () => {
    const db = getDb();
    try {
      const users = db.models.Class.findAll();
      return users;
    } catch (err) {
      throw err;
    }
  },
  getClassById: async ({ classId }) => {
    const db = getDb();
    try {
      const clazz = db.models.Class.findAll({
        where: {
          cla_id: classId,
        },
      });
      return clazz;
    } catch (err) {
      throw err;
    }
  },
  createClass: async (classData) => {
    const db = getDb();
    try {
      const createdUser = await db.models.Class.create({
        cla_name: classData.cla_name,
        cla_status: classData.cla_status,
        createdAt: classData.createdAt,
        updatedAt: classData.updatedAt,
        sch_id: classData.sch_id,
      });
      return createdUser;
    } catch (err) {
      throw err;
    }
  },
  updateClass: async (classId, classData) => {
    const db = getDb();
    try {
      await db.models.Class.update(
        {
          cla_name: classData.cla_name,
          cla_status: classData.cla_status,
          createdAt: classData.createdAt,
          updatedAt: classData.updatedAt,
          sch_id: classData.sch_id,
        },
        {
          where: {
            cla_id: cla_id,
          },
        }
      );
      return userData;
    } catch (err) {
      throw err;
    }
  },
  deleteClass: async (classId) => {
    const db = getDb();
    try {
      const response = await db.models.Class.destroy({
        where: {
          usr_id: classId,
        },
      });
      return response;
    } catch (err) {
      throw err;
    }
  },
};
