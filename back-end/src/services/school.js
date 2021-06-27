const { getDb } = require('../loaders/sequelize');

module.exports = {
  getAllSchools: async (query) => {
    const db = getDb();
    try {
      const schools = db.models.School.findAll();
      return schools;
    } catch (err) {
      throw err;
    }
  },
  getSchoolById: async ({ schoolId }) => {
    const db = getDb();
    try {
      const school = db.models.School.findAll({
        where: {
          sch_id: schoolId,
        },
      });
      return school;
    } catch (err) {
      throw err;
    }
  },
  createSchool: async ({ schoolData }) => {
    const db = getDb();
    try {
      const createdSchool = await db.models.School.create({
        sch_name: schoolData.sch_name,
        sch_cnpj: schoolData.sch_cnpj,
        sch_state: schoolData.sch_state,
        sch_city: schoolData.sch_city,
        sch_status: schoolData.sch_status,
        sch_address: schoolData.sch_address,
        sch_phoneNumber: schoolData.sch_phoneNumber,
        sch_mecNumber: schoolData.sch_mecNumber,
        sch_email: schoolData.sch_email,
      });
      return createdSchool;
    } catch (err) {
      throw err;
    }
  },
  updateSchool: async (schoolId, schoolData) => {
    const db = getDb();
    try {
      await db.models.School.update(
        {
          sch_name: schoolData.sch_name,
          sch_cnpj: schoolData.sch_cnpj,
          sch_state: schoolData.sch_state,
          sch_city: schoolData.sch_city,
          sch_status: schoolData.sch_status,
          sch_address: schoolData.sch_address,
          sch_phoneNumber: schoolData.sch_phoneNumber,
          sch_mecNumber: schoolData.sch_mecNumber,
          sch_email: schoolData.sch_email,
        },
        {
          where: {
            sch_id: schoolId,
          },
        }
      );
      return schoolData;
    } catch (err) {
      throw err;
    }
  },
  deleteSchool: async (schoolId) => {
    const db = getDb();
    try {
      const response = await db.models.School.destroy({
        where: {
          sch_id: schoolId,
        },
      });
      return response;
    } catch (err) {
      throw err;
    }
  },
};
