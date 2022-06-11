const bookshelf = require('../database/db')
const orderItem = require('../model/orderItem.model')
const user = require('./user.model')

const order = bookshelf.model('order',{
    tableName:'orders',
    idAttribute:'id',

    user(){
        return this.belongsTo(user,'user_id','id')
    },
    orderItem(){
        return this.hasMany(orderItem,'order_id',"id")
    }
   
})

module.exports = order
