const { DB_PASSWORD } = require('./enviornment_variables')
const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'litelight',
  password: DB_PASSWORD,
  port: 2345
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}