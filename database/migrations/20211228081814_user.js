
exports.up = function(knex) {
    return knex.schema.createTable('user',table =>{
        table.increments('id').primary();
        table.string('name').nullable()
        table.string('email').nullable()
        table.string('password').nullable()
        table.string('role').nullable()
        table.string('status').nullable()
        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('user')
  
};
