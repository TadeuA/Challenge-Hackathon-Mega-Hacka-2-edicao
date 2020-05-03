exports.up = function (knex) {
  knex.schema.createTable("product", (table) => {
    table.increments();
    table.string("name").notNullable();
    table.integer("marketplace_id").notNullable();

    table.foreign("marketplace_id").references("id").inTable("marketplace");
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("marketplace");
};
