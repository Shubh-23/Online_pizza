const { authenticate } = require('passport')
const order = require('../model/order.model')
const orderServices = require('./orderServices')

class adminOrder{
    index(){
        return order.where({"order_status":"com"}).fetchAll({withRelated:['orderItem','user']}).then((data)=>{
            console.log(data)
            return data
        }).catch((err)=>{
            console.log(err)
            return err
        })

    }

}
module.exports = new adminOrder

