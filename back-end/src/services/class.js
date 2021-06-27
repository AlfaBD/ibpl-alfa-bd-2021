const { getDb } = require('../loaders/sequelize');

module.exports = {
  getAllClasses: async (school) => {
    const db = getDb();
    try {
      let users;
      users = await db.models.Class.findAll({
        where: {
          school_user_id: school,
        },
        include: [
          {
            model: db.models.School,
            attributes: ['sch_name'],
            as: 'school',
          },
          {
            model: db.models.User,
            attributes: ['usr_name'],
            as: 'teacherUserId',
          },
        ],
      });
      users = users.length === 0 ? await db.models.Class.findAll({
        include: [
          {
            model: db.models.School,
            attributes: ['sch_name'],
            as: 'school',
          },
          {
            model: db.models.User,
            attributes: ['usr_name'],
            as: 'teacherUserId',
          },
        ],
      }) : users;
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
    console.log(classData.teacher_user_id);
    console.log(classData.school_user_id);
    const db = getDb();
    try {
      const createdUser = await db.models.Class.create({
        cla_name: classData.cla_name,
        cla_status: classData.cla_status,
        teacher_user_id: classData.teacher_user_id,
        school_user_id: classData.school_user_id,
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
