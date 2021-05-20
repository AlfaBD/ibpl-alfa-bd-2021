const dotenv = require('dotenv');

const DATABASE_DIALECT = 'mysql';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });


module.exports = {
  port: process.env.PORT || 3000,
  databaseConfig: {
      development: {
        host: process.env.DATABASE_HOST_DEV,
        port: process.env.DATABASE_PORT_DEV,
        username: process.env.DATABASE_USERNAME_DEV,
        password: process.env.DATABASE_PASSWORD_DEV,
        database: process.env.DATABASE_NAME_DEV,
        dialect: DATABASE_DIALECT
      },
      production: {
        host: process.env.DATABASE_HOST_PROD,
        port: process.env.DATABASE_PORT_PROD,
        username: process.env.DATABASE_USERNAME_PROD,
        password: process.env.DATABASE_PASSWORD_PROD,
        database: process.env.DATABASE_NAME_PROD,
        dialect: DATABASE_DIALECT
      }
  }
};