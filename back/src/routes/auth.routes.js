const express = require('express')
const { authController } = require('../controllers/index.controller')
const { validateLogin, validateRegistration } = require('../middleware/validations/loginValidation.mdw')
const authRouter = express.Router()


authRouter.post('/login', validateLogin, authController.validateUser)
authRouter.post('/register', validateRegistration, authController.createUser)

module.exports = authRouter