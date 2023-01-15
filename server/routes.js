const { validationChain } = require('./validation')
const { hash } = require('bcryptjs')
const db = require('./db')

const { Router } = require('express')
const router = Router()

router.post('/register', validationChain, async(req, res) => {
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

module.exports = router