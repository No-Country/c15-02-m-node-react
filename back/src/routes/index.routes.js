const express = require('express')
const loggingMdw = require('../middleware/logger.mdw')
const userRouter = require('./user.routes')
const authRouter = require('./auth.routes')

const routes = express()

//mdw
routes.use(loggingMdw)

//Routes
routes.use('/user', userRouter)
routes.use('/auth', authRouter)

routes.use('/ping', (req, res)=>{
  res.status(200).json({ status:200, message:"Pong" })
})
routes.use('*', (req, res)=>{
  res.status(404).json({ message:"Resource not found" })
})


module.exports = routes