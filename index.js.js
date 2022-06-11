const express = require('express')
const app = express()
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const path = require('path')
const PORT = process.env.PORT || 3000
const routers = require('./routes/web')
const bodyParse = require('body-parser')
const session = require('express-session')
const flash = require('express-flash')
require('dotenv').config()
const passport = require('passport')



// Session config
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))

//passport config
const passportInit = require('./config/passport')
passportInit(passport)
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

//Assets
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


//global middleware
app.use((req,res, next)=>{
    res.locals.session = req.session
    res.locals.user = req.user
    next()
})
 
//set Template engine
app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')
app.use(bodyParse())
app.use(routers)

app.listen(3000,()=>{
    console.log(`server is working port ${PORT}`)
})


