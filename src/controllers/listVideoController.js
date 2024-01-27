const database = require("../database/knex")
const appError = require("../utils/appError")

class listVideo{
    async index(req, res){
        const list = await database("listVideo")
        res.json(list) 
    }

    async create(req,res){
       
            const {name, url, user_id} = req.body
    
            const urlExists = await database("listVideo").where({url}).first()
            
            if(!name) throw new appError("Digite o nome!")
            if(!url) throw new appError("Digite a url!")
            if(urlExists) throw new appError("Url já cadastrada!")

            const listCheck = await database("listVideo").where({user_id}).first()
                if(listCheck)
                    throw new appError("Usuário já possui uma playlist")
                else{
                    await database("listVideo").insert({name, url, user_id})
                    res.json()
                }
            }
  
}

module.exports = listVideo