exports.up = knex => knex.schema.createTable("users", table => {
    table.increments("id")
    table.text("name")
    table.text("email").notNullable().unique()
    table.text("password").notNullable()
})

exports.down = knex => knex.schema.dropTable("users")
