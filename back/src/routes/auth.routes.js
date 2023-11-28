const express = require('express')
const { authController } = require('../controllers/index.controller')
const authRouter = express.Router()


authRouter.post('/login', authController.validateUser)
authRouter.post('/register', authController.createUser)

module.exports = authRouter