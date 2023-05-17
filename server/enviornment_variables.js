const { config } = require('dotenv')
config()

const { PORT, DB_PASSWORD, SECRET, DB_HOST } = process.env

module.exports = {
  DB_HOST: DB_HOST,
  PORT: PORT,
  DB_PASSWORD: DB_PASSWORD,
  SECRET: SECRET
}