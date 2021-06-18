const config = require("../config")
const { Sequelize } = require("sequelize")
const getModelsConfig = require("../models")

let db

const sequelizeLoader = async ({ env }) => {
  try {
    console.log(
      "[SEQUELIZE LOADER] - Loading sequelize connection with DataBase"
    )

    const databaseConfig = config.databaseConfig
    const sequelizeConnection = new Sequelize(databaseConfig[env])

    // Test if the connection was successful
    await sequelizeConnection.authenticate()

    // Define models
    const modelConfigs = getModelsConfig()
    let models = {}

    modelConfigs.forEach(
      ({ tableName, tableAttributes, tableOptions = {} }) => {
        models[tableName] = sequelizeConnection.define(
          tableName,
          tableAttributes,
          tableOptions
        )
        //Initialize instance methods
        if (tableOptions.instanceMethods) {
          Object.keys(tableOptions.instanceMethods).forEach((method) => {
            models[tableName].prototype[method] =
              tableOptions.instanceMethods[method]
          })
        }
      }
    )

    // Build associations
    modelConfigs.forEach((config) => {
      config.buildAssociations(models)
    })

    // Sync models with database
    await sequelizeConnection.sync()
    db = sequelizeConnection

    // Init the Roles model with pre-defined roles
    const roles = config.preDefinedRoles
    for (role of roles) {
      await db.models.Role.upsert({ rol_name: role })
    }

    // Init the pre-defined admin
    const admin = await config.preDefinedAdmin
    await db.models.User.upsert({
      usr_id: admin.usr_id,
      usr_email: admin.usr_email,
      usr_password_hash: admin.usr_password_hash,
      usr_primary_role: admin.usr_primary_role,
    })

    return sequelizeConnection
  } catch (err) {
    console.error("[SEQUELIZE LOADER] - Error loading sequelize")
    console.error(err)
  }
}

module.exports.sequelizeLoader = sequelizeLoader
module.exports.getDb = () => {
  return db
}
