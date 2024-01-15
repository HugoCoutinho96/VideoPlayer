require("express-async-errors")
const database = require("./database/sqlite")
const express = require("express")
const api = express()
const PORT = 3333

const route = require("./routes")
database()
api.use(express.json())
api.use(route)
api.listen(PORT, () => console.log(`Server rodando na porta: ${PORT}`))