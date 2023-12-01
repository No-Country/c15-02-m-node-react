const express = require('express')
const { userController, accountController } = require('../controllers/index.controller')
const { authenticateToken, authorizeToken } = require('../middleware/auth.mdw')
const { validateAccountUpdate } = require('../middleware/validations/accountValidation')
const userRouter = express.Router()

const authMdw = [authenticateToken, authorizeToken]


//INFO personal
userRouter.get('/:userId', authMdw, userController.getUser)

//CUENTAS
//Crear => currency param validos: ars/ARS, usd/USD
userRouter.post('/:userId/account/:currency', authMdw, accountController.createAccount)
//Ver
userRouter.get('/:userId/account', authMdw, accountController.getAccounts)
//Borrar
userRouter.delete('/:userId/account/:accountId', authMdw, accountController.deleteAccount)
//Modificar
userRouter.put('/:userId/account/:accountId', [authMdw, validateAccountUpdate], accountController.updateAccount)

module.exports = userRouter