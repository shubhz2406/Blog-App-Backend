const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const userRoute = require('./routes/user')
const categoryRoute = require('./routes/category')
const commentRoute = require('./routes/comment')
const blogRoute = require('./routes/blog')

const dbPassword = process.env.DB_PASSWORD
mongoose.connect(`mongodb+srv://meolessi:${dbPassword}@shubh37.nlkbzju.mongodb.net/?retryWrites=true&w=majority&appName=shubh37`)
.then(res=>{console.log("connected to database")})
.catch(err=>{console.log("failed to connect to database")})

app.use(bodyParser.json())

app.use('/user',userRoute)
app.use('/category',categoryRoute)
app.use('/comment',commentRoute)
app.use('/blog',blogRoute)

// handling bad request
app.use('*',(req,res)=>{
    res.status(404).json({
        msg:'Hi! Use the link to test api using postman.'
    })
})




module.exports = app
