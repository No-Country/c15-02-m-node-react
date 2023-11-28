const express = require('express')
const { userController } = require('../controllers/index.controller')
const userRouter = express.Router()


userRouter.get('/', userController.getAllUsers)
userRouter.get('/:userId', userController.getUser)

module.exports = userRouter