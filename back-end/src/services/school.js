const { getDb } = require('../loaders/sequelize')


module.exports = {
    createSchool: async ({schoolData}) => {
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
                sch_email: schoolData.sch_email
            })
            return createdSchool;
        } catch (err) {
            throw err;
        }
    }
}