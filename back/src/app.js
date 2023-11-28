const express = require('express')
const { initializeDB } = require('./config/db.config')
const routes = require('./routes/index.routes')
const corsMiddleware = require('./middleware/cors')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()


//Mdw
app.use(express.json())
app.use(corsMiddleware())
app.disable('x-powered-by')

//Routes
app.use(routes)

app.listen(PORT, async ()=>{
  await initializeDB();
  console.log(`Server running on port: ${PORT}`)
})

