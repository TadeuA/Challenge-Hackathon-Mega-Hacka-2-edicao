exports.up = function (knex) {
  knex.schema.createTable("answer", (table) => {
    table.increments();
    table.string("answer").notNullable();
    table.boolean("automaticaly").defaultTo(false);
    table.integer("question_id").notNullable();

    table.foreign("question_id").references("id").inTable("product");
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("answer");
};
