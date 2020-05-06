exports.up = function (knex) {
  knex.schema.createTable("question", (table) => {
    table.increments();
    table.string("question").notNullable();
    table.boolean("reference").defaultTo(false);
    table.integer("product_id").notNullable();
    table.integer("like");
    table.timestamp("date", { options: [{ useTz: true }] });
    table.integer("count");
    table.foreign("like").references("id").inTable("question");

    table.foreign("product_id").references("id").inTable("product");
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("question");
};
