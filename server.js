const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const taskRoutes = require('./routes/task.routes.js')

const app = express()

const PORT = process.env.PORT || 5000

dotEnv.config()
app.use(bodyParser.json())


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected Successfully!")
})
.catch((error)=>{
    console.log(`${error}`)
})
app.use('/task', taskRoutes)

app.listen(PORT, ()=>{
    console.log(`Server Started and running at ${PORT}`)
})