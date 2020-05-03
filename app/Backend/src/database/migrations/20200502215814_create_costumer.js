exports.up = function (knex) {
  knex.schema.createTable("costumer", (table) => {
    table.increments();
    table.string("image").notNullable();
    table.string("name").notNullable();
    table.integer("question_id").notNullable();

    table.foreign("question_id").references("id").inTable("product");
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("costumer");
};
