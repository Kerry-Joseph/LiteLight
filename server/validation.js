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


module.exports = {
  validationChain: [validEmailCheck, existingEmailCheck, passwordCheck, validationErrorCheck]
}