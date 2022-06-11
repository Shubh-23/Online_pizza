
exports.up = function(knex) {
    return knex.schema.createTable('orders',table =>{
        table.increments('id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('id').inTable("user");
        table.string('phone').nullable()
        table.string('Address').nullable() 
        table.string('order_status').nullable() 
        table.timestamps(true,true)  
    })
  
};

exports.down = function(knex) {
    return knex.schema.distoryTable('orders')
  
};
