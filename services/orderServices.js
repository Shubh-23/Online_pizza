const promise = require('bluebird')
const order = require('../model/order.model')
const orderItem = require('../model/orderItem.model')


class orders{
    orderPizza(data,item){
        const Order = new order(data)
        return Order.save().then((result)=>{
            const stuff = JSON.parse(JSON.stringify(result))

            return promise.all(item).each(function(param){             
            const  data1 = {
                "order_id":stuff.id,
                "name":param.item.name,
                "image":param.item.image,
                "size":param.item.size,
                "qty":param.qty,
                "price":param.item.price
            } 
        const OrderItem = new orderItem(data1)
        return OrderItem.save().then((result1)=>{
            return result1
        }).catch((err)=>{
            return err
            })
        })
        }).catch((err)=>{
            console.log(err)
            return err
        })
    }
    indexService(params){
        return order.where({"user_id":params}).fetchAll({withRelated:['orderItem']}).then((data)=>{
            return JSON.parse(JSON.stringify(data))
        })
    }
}
module.exports = new orders