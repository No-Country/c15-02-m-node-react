const express = require('express')
const loggingMdw = require('../middleware/logger.mdw')

const routes = express()

routes.use(loggingMdw)

//pruebas
routes.use('/ping', (req, res)=>{
  res.status(200).send("Pong")
})
routes.use('*', (req, res)=>{
  res.status(404).json({ message:"Resource not found" })
})


module.exports = routes