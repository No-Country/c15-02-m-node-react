const express = require('express')
const { authController, userController } = require('../controllers/index.controller')
const { validateLogin, validateRegistration } = require('../middleware/validations/loginValidation.mdw')
const authRouter = express.Router()


authRouter.post('/login', validateLogin, authController.validateUser)
authRouter.post('/register', validateRegistration, userController.createUser)

module.exports = authRouter