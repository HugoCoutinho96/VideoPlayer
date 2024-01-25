require("express-async-errors")
const appError = require("./utils/appError")
const migrates = require("./database/knex")
const express = require("express")
const api = express()
const PORT = 3333

const route = require("./routes")
migrates()
api.use(express.json())
api.use(route)
api.use((error, req, res, next) => {
    if(error instanceof appError){
       return res.json({error: error.message})
    }else{
       return res.json({error: "error do servidor!"})
    }
})
api.listen(PORT, () => console.log(`Server rodando na porta: ${PORT}`))