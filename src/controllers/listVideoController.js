const database = require("../database/knex")
const appError = require("../utils/appError")

class listVideo{
    async index(req, res){
        const {user_id} = req.params
    
        const list = await database("listVideo").where({user_id})
        res.json(list) 
    }

    async create(req,res){
       
            const {name, url, user_id} = req.body
    
            const urlExists = await database("listVideo").where({url}).first()
            
            if(!name) throw new appError("Digite o nome!")
            if(!url) throw new appError("Digite a url!")
            if(urlExists) throw new appError("Url já cadastrada!")

            await database("listVideo").insert({name, url, user_id})
            res.json()
    }

    async delete(req, res){
        const {id} = req.body
        const data = await database("listVideo").where({id}).del()
        res.json(data)
    }

    async update(req, res){
        const {name, url, id} = req.body

        if(!name) throw new appError("Digite o nome!")
        if(!url) throw new appError("Digite a url!")

        await database("listVideo").where({id}).update({name, url})
        res.json()
    }
  
}

module.exports = listVideo