const home = require('../controllers/homecontrollers')
const authController = require('../controllers/authController')
const cartController = require('../controllers/customers/cartController')
const orderController = require('../controllers/customers/orderController')
const adminOrder = require('../controllers/admin/adminOrder')
const guest = require("../middlewares/guest")
const auth = require("../middlewares/auth")
const Admin = require("../middlewares/admin")
const express = require('express')
const router = express.Router()

    //Home
    router.get('/',home.InsertMenuData)
   
    //Registeration
    router.get('/register',guest,authController.getRegisterUser)
    router.post('/register',authController.registerUser)

    //login
    router.get('/login',guest,authController.loginUser)
    router.post('/login',authController.postLogin)
    router.post('/logout',authController.logout)

    //cart
    router.get('/cart',cartController.index)
    router.post('/update-cart',cartController.updateCart)
    
    //Customer order
    router.post('/orders',auth,orderController.orderPizza)
    router.get('/customers/orders',auth,orderController.index)

    //Admin 
    router.get('/admin/orders',adminOrder.index)




module.exports = router