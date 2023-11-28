const express = require('express')
const { initializeDB } = require('./config/db.config')
const routes = require('./routes/index.routes')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.disable('x-powered-by')

//Mdw
app.use(express.json())

//Routes
app.use(routes)

app.listen(PORT, async ()=>{
  await initializeDB();
  console.log(`Server running on port: ${PORT}`)
})

