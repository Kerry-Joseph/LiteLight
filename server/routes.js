const { 
  registerValidationChain, 
  loginValidationChain, 
  tokenPassportCheck,
  updatePasswordValidationChain 
} = require('./validation_middleware')

const { hash } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const db = require('./db')

const { SECRET } = require('./enviornment_variables')

const { Router } = require('express')
const router = Router()


// REGISTER
router.post('/register', registerValidationChain, async(req, res) => {
  const { email, password, first_name, last_name, city, state } = req.body
  try {
    const hashedPassword = await hash(password, 10)

    await db.query('insert into users(email, password, first_name, last_name, city, state) values ($1, $2, $3, $4, $5, $6)', [
      email,
      hashedPassword,
      first_name,
      last_name,
      city,
      state
    ])

    res.status(201).json({
      success: true,
      message: 'registration successfull'
    })
  } catch (err) {
    
    return res.status(500).json({
      error: err.message
    })
  }
})

// UPDATE
router.put('/update-password', updatePasswordValidationChain, async(req, res) => {
  const { new_password, email } = req.body
  try {
    const hashedPassword = await hash(new_password, 10)

    await db.query('UPDATE users SET password = $1 WHERE email = $2', [
      hashedPassword,
      email
    ])

    res.status(200).json({  
      success: true,
      message: 'password update successful'
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'password update failed'
    })
  }
})

router.put('/update-info', async(req, res) => {
  const { email , first_name, last_name, city, state } = req.body
  try {
    await db.query('UPDATE users SET first_name = $2, last_name = $3, city = $4, state = $5 WHERE email = $1', [
      email,
      first_name,
      last_name,
      city,
      state
    ])

    res.status(200).json({
      success: true,
      message: 'info update successful'
    })
  } catch (err) {
    res.status(400).send(err)
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

    return res.status(200).json(token)

  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }

})


// LOGOUT
router.get('/logout', (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: 'logout successful'
    })
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
})


// TOKEN PASSPORT
router.post('/passport', tokenPassportCheck, (req, res) => {
  try {
    return res.status(200).json(req.user)
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
})

module.exports = router