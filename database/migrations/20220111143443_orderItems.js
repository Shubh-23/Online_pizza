
exports.up = function(knex) {
    return knex.schema.createTable('order_item',table =>{
        table.increments('id').primary();
        table.integer('order_id').unsigned().notNullable();
        table.foreign('order_id').references('id').inTable("orders");
        table.string('name').nullable()
        table.string('image').nullable()
        table.string('size').nullable()
        table.integer('qty').nullable()
        table.string('price').nullable()   

    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('order_item')
  
};
