const bookshelf = require('../database/db')

const orderItem = bookshelf.model('orderItem',{
    tableName:"order_item",
    idAttribute:"id"
})

module.exports = orderItem