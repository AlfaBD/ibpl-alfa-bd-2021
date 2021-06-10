const { getDb } = require('../loaders/sequelize')


module.exports = {
    createUser: async ({role, userData}) => {
        const db = getDb();
        try {
            const createdUser = await db.models.User.create({
                usr_cpf: userData.usr_cpf,
                usr_name: userData.usr_name,
                usr_email: userData.usr_email,
                usr_password_hash: userData.usr_password_hash,
                usr_birth_date: userData.usr_birth_date,
                usr_primary_role: role
            })
            return createdUser;
        } catch (err) {
            throw err;
        }
    },
    getUserByUsername: async({username}) => {
        const db = getDb();
        try {
            const user = await db.models.User.findOne({where: {usr_email: username}});
            return user;
        } catch(err) {
            throw err;
        }
    }
}