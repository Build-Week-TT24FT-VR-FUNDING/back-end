exports.up = function (knex) {
  return knex.schema
    .createTable("roles", (roles) => {
      roles.increments("role_id");
      roles.string("name", 255).notNullable().unique();
    })
    .createTable("users", (users) => {
      users.increments("id");
      users.string("first_name", 255).notNullable();
      users.string("last_name", 255).notNullable();
      users.string("email", 255).notNullable().unique();
      users.string("password", 255).notNullable();
      users
        .integer("role")
        .unsigned()
        .notNullable()
        .references("role_id")
        .inTable("roles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("projects", (projects) => {
      projects.increments("project_id");
      projects.string("project_title", 250).notNullable().unique();
      projects.string("project_type", 250).notNullable();
      projects.text("mission_statement", "longtext").notNullable();
      projects.text("project_description", "longtext").notNullable();
      projects.decimal("funding_amount", 65, 2).notNullable();
      projects.decimal("amount_raised", 65, 2).notNullable(0);
      projects.text("project_timeline", "longtext").notNullable();
      projects
        .integer("owner_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("roles")
    .dropTableIfExists("projects");
};
