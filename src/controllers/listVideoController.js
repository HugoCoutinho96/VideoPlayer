const database = require("../database/knex")
const appError = require("../utils/appError")

class listVideo{
    async index(req, res){
        const list = await database("listVideo")
        res.json(list) 
    }

    async show(req, res){
        const {id} = req.body
    }

    async create(req,res){
        
            const {name, url} = req.body
    
            const urlExists = await database("listVideo").where({url}).first()
            
            if(!name) throw new appError("Digite o nome!")
            if(!url) throw new appError("Digite a url!")
            if(urlExists) throw new appError("Url já cadastrada!")
    
            await database("listVideo").insert({name, url})
            res.json()

       
    }
}

module.exports = listVideo