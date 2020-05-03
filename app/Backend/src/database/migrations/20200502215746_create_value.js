exports.up = function (knex) {
  knex.schema.createTable("value", (table) => {
    table.increments();
    table.string("description").notNullable();
    table.integer("characteristics_id").notNullable();

    table
      .foreign("characteristics_id")
      .references("id")
      .inTable("characteristics");
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("value");
};
