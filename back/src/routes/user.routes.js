const express = require('express')
const { userController } = require('../controllers/index.controller')
const { authenticateToken, authorizeToken } = require('../middleware/auth.mdw')
const userRouter = express.Router()


userRouter.get('/', userController.getAllUsers)
userRouter.get('/:userId', [authenticateToken, authorizeToken], userController.getUser)

module.exports = userRouter