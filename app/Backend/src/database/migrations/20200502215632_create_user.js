exports.up = function (knex) {
  knex.schema.createTable("user", (table) => {
    table.string("id").primary();
    table.string("password").notNullable();
    table.string("fristName").notNullable();
    table.string("lastName").notNullable();
    table.string("image");
    table.string("email").notNullable();
    table.integer("phone").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("user");
};
