exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', function(table){
    table.increments();
    table.string('title');
    table.text('image');
    table.decimal('price');
    table.integer('rating');
    table.string('category')
    table.text('info');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games');
};
