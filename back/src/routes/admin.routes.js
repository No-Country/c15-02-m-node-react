const express = require('express')
const { userController, accountController } = require('../controllers/index.controller')
const adminRouter = express.Router()


//TO-DO permiso superuser
adminRouter.get('/users', userController.getAllUsers)
adminRouter.get('/accounts', accountController.getAllDeletedAccounts)


module.exports = adminRouter