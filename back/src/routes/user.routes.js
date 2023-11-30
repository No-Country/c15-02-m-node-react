const express = require('express')
const { userController, accountController } = require('../controllers/index.controller')
const { authenticateToken, authorizeToken } = require('../middleware/auth.mdw')
const userRouter = express.Router()

//Prueba => TO-DO permiso superuser
userRouter.get('/', userController.getAllUsers)

//INFO personal
userRouter.get('/:userId', [authenticateToken, authorizeToken], userController.getUser)
//CUENTAS
//Crear => :currency param validos: ars, usd
userRouter.post('/account/:currency/:userId', [authenticateToken, authorizeToken], accountController.createAccount)
//Ver
userRouter.get('/account/:userId', [authenticateToken, authorizeToken], accountController.getAccounts)
//TO-DO => borrar, modificar

module.exports = userRouter