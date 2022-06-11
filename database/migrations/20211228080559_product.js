const knexfile = require("../knexfile");

exports.up = function(knex) {
    return knex.schema.createTable('product',table =>{
        table.increments('id').primary();
        table.string('name').nullable()
        table.string('image').nullable()
        table.string('size').nullable()
        table.string('price').nullable()   
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('product')
  
};
