const { compare } = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const db = require('./db')

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


module.exports = {
  registerValidationChain: [validEmailCheck, existingEmailCheck, passwordCheck, validationErrorCheck],
  loginValidationChain: [loginValidation, validationErrorCheck]
}