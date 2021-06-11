const { getDb } = require('../loaders/sequelize');

module.exports = {
  getAllUsers: async () => {
    const db = getDb();
    try {
      const users = db.models.User.findAll();
      return users;
    } catch (err) {
      throw err;
    }
  },
  getUserById: async ({ userId }) => {
    const db = getDb();
    try {
      const user = db.models.User.findAll({
        where: {
          usr_id: userId,
        },
      });
      return user;
    } catch (err) {
      throw err;
    }
  },
  getUsersByRole: async (role) => {
    const db = getDb();
    try {
      const school = db.models.School.findAll({
        where: {
          role,
        },
      });
      return school;
    } catch (err) {
      throw err;
    }
  },
  getUserByUsername: async ({ username }) => {
    const db = getDb();
    try {
      const user = await db.models.User.findOne({
        where: { usr_email: username },
      });
      return user;
    } catch (err) {
      throw err;
    }
  },
  createUser: async (userData) => {
    const db = getDb();
    try {
      const createdUser = await db.models.User.create({
        usr_cpf: userData.usr_cpf,
        usr_name: userData.usr_name,
        usr_email: userData.usr_email,
        usr_password_hash: userData.usr_password_hash,
        usr_birth_date: userData.usr_birth_date,
        usr_primary_role: userData.role,
      });
      return createdUser;
    } catch (err) {
      throw err;
    }
  },
  updateUser: async (userId, userData) => {
    const db = getDb();
    try {
      await db.models.User.update(
        {
          usr_cpf: userData.usr_cpf,
          usr_name: userData.usr_name,
          usr_email: userData.usr_email,
          usr_password_hash: userData.usr_password_hash,
          usr_birth_date: userData.usr_birth_date,
          usr_primary_role: userData.role,
        },
        {
          where: {
            usr_id: userId,
          },
        }
      );
      return userData;
    } catch (err) {
      throw err;
    }
  },
  deleteUser: async (userId) => {
    const db = getDb();
    try {
      const response = await db.models.User.destroy({
        where: {
          usr_id: userId,
        },
      });
      return response;
    } catch (err) {
      throw err;
    }
  },
};
