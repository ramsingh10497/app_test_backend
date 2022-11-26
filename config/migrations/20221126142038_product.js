exports.up = function (knex) {
    return knex.schema.createTable("products", (table) => {
      table.increments("id");
      table.string("title").notNullable();
      table.string("description");
      table.string("image");
      table.decimal("price").notNullable();
      table.integer("reviewScore");
      table.integer("reviewCount");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("products");
  };
  
