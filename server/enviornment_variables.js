const { config } = require('dotenv')
config()

const { PORT, DB_PASSWORD, SECRET } = process.env

module.exports = {
  PORT: PORT,
  DB_PASSWORD: DB_PASSWORD,
  SECRET: SECRET
}