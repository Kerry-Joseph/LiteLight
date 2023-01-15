const { config } = require('dotenv')
config()

const { PORT, DB_PASSWORD } = process.env

module.exports = {
  PORT: PORT,
  DB_PASSWORD: DB_PASSWORD
}