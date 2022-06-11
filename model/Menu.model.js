const bookshelf = require('../database/db')

const menu = bookshelf.model('menu',{
    tableName:'product',
    idAttribute:'id '
})

module.exports =  menu