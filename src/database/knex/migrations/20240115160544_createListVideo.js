exports.up = knex => knex.schema.createTable("listVideo", table => {
    table.increments("id")
    table.text("name")
    table.text("url").notNullable().unique()
    table.text("user_id").references("id").inTable("users").onDelete("CASCADE")
})

exports.down = knex => knex.schema.dropTable("listVideo")