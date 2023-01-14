const express = require('express')
const app = express()
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')
const { config } = require('dotenv')
config()
const { PORT } = process.env

app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(cors())

const routes = require('./routes')

app.get('/', (req, res) => {
  try {
    res.send('works')
  } catch (err) {
    console.log(err)
  }
})



try {
  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
  })
} catch (err) {
    console.log(err)
}