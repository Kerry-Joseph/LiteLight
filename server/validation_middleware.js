const { compare } = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const passport = require('passport')
const { Strategy } = require('passport-jwt')
const db = require('./db')
const { SECRET } = require('./enviornment_variables')


// REGISTER --
const validEmailCheck = check('email').isEmail().withMessage('Please provide avalid email.')

const existingEmailCheck = check('email').custom( async(value) => {
  const { rows } = await db.query('SELECT * from users WHERE email = $1', [ value ])

  if (rows.length){
    throw new Error('Email already exists.')
  }
})

const passwordCheck = check('password').isLength({ min: 6, max: 15 }).withMessage('Password must be between 6 - 15 characters.')

const validationErrorCheck = (req, res, next) => {
  let err = validationResult(req)

  if(!err.isEmpty()){
    return res.status(400).json({
      errors: err.mapped()
    })
  }

  next()
}


// LOGIN --
const loginValidation = check('email').custom( async(value, { req }) => {
  const user = await db.query('SELECT * from users WHERE email = $1', [ value ])

  if(!user.rows.length){
    throw new Error('Invalid Credentials')
  }

  const loginPasswordCheck = await compare(req.body.password, user.rows[0].password) 

  if(!loginPasswordCheck){
    throw new Error('Invalid Credentials')
  }

  req.user = user.rows[0]
})


// PASSPORT --
const token = (req) => {
  return req && req.body ? req.body.token : undefined
}


const jwtOptions = {
  secretOrKey: SECRET,
  jwtFromRequest: token
}

passport.use (
  new Strategy(jwtOptions, async({ id }, done) => {
    try {
      const { rows } = await db.query('SELECT id, email, first_name, last_name, city, state FROM users WHERE id = $1',
       [ id ])

      if(!rows.length){
        throw new Error('401 not authorized')
      }

      let user = {
        id: rows[0].id,
        email: rows[0].email,
        first_name: rows[0].first_name,
        last_name: rows[0].last_name,
        city: rows[0].city,
        state: rows[0].state,
      }

      return done(null, user)
      
    } catch (err) {
      console.log(err.message)
      done(err.message, false)
    }
  })
)

const passportAuth = passport.authenticate('jwt', { session: false })


module.exports = {
  registerValidationChain: [validEmailCheck, existingEmailCheck, passwordCheck, validationErrorCheck],
  loginValidationChain: [loginValidation, validationErrorCheck],
  tokenPassportCheck: passportAuth
}