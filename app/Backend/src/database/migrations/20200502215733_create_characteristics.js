exports.up = function (knex) {
  knex.schema.createTable("characteristics", (table) => {
    table.increments();
    table.string("name").notNullable();
    table.integer("product_id").notNullable();

    table.foreign("product_id").references("id").inTable("product");
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("characteristics");
};
