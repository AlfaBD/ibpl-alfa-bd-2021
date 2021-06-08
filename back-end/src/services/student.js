const sequelizeLoader = require('../loaders/sequelize')
const { getDb } = require('../loaders/sequelize')


module.exports = {
    getAllStudents: async () => {
        const db = getDb();
        try {
            const students = await db.models.User.findAll();
            return students;
        } catch (err) {
            throw err;
        }
    },
    getStudentById: async ({ studentId }) => {
        const db = getDb();
        try {
            const student = await db.models.User.findOne({where: { usr_id: studentId }});
            return student;
        } catch (err) {
            throw err;
        }
    }
}