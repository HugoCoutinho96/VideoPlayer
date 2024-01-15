exports.up = knex => knex.schema.createTable("listVideo", table => {
    table.increments("id")
    table.text("name")
    table.text("url").notNullable().unique()
})

exports.down = knex => knex.schema.dropTable("listVideo")