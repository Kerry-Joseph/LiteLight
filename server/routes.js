const { registerValidationChain, loginValidationChain } = require('./validation')
const { hash } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const db = require('./db')

const { SECRET } = require('./enviornment_variables')

const { Router } = require('express')
const router = Router()

// REGISTER
router.post('/register', registerValidationChain, async(req, res) => {
  const { email, password, first_name, last_name } = req.body
  try {
    const hashedPassword = await hash(password, 10)

    await db.query('insert into users(email, password, first_name, last_name) values ($1, $2, $3, $4)', [
      email,
      hashedPassword,
      first_name,
      last_name
    ])

    res.status(201).json({
      success: true,
      message: 'registration successfull'
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: err.message
    })
  }
})

// LOGIN
router.post('/login', loginValidationChain, (req, res) => {
  let user = req.user

  let payload = {
    id: user.id,
    email: user.email
  }

  try {
    const token = sign(payload, SECRET)

    res.cookie('token', token)

    return res.status(201).json({
      success: true,
      message: 'login successful'
    })
  } catch (err) {
    console.log(err.message)
    return res.status(500).json({
      error: err.message
    })
  }

})


// LOGOUT
router.get('/logout', (req, res) => {
  try {
    res.clearCookie('token')
    return res.status(200).json({
      success: true,
      message: 'logout successful'
    })
  } catch (err) {
    console.log(err.message)
    return res.status(500).json({
      error: err.message
    })
  }
})

module.exports = router