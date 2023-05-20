const express = require('express')
const app = express()
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')
const { PORT } = require('./enviornment_variables')


app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(cors())
app.use(passport.initialize())


const routes = require('./routes')

app.use('/api', routes)


try {
  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
  })
} catch (err) {
  console.log(err)
}