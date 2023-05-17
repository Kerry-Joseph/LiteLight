const { DB_PASSWORD, DB_HOST } = require('./enviornment_variables')
const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: DB_HOST,
  database: 'litelight',
  password: DB_PASSWORD,
  port: 5432
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}