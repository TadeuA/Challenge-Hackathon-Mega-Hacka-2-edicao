exports.up = function (knex) {
  knex.schema.createTable("marketplace", (table) => {
    table.increments();
    table.string("name").notNullable();
    table.string("user_id").notNullable();
    table.string("login");
    table.string("password");
    table.foreign("user_id").references("id").inTable("user");
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("marketplace");
};
