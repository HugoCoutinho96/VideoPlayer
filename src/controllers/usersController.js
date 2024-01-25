const appError = require("../utils/appError")
const database = require("../database/knex")
const {hash} = require("bcryptjs")

class usersController{
    async create(req, res){
        const {name, email, password, repeatPassword} = req.body
        
        const emailExist = await database("users").where({email}).first()

        if(!name) throw new appError("Digite o nome!")
        if(!email) throw new appError("Digite seu email")
        if(emailExist) throw new appError("Email já cadastrado!")
        if(!password) throw new appError("Digite sua senha!")
        if(!repeatPassword) throw new appError("Repita sua senha!")
        if(password != repeatPassword) throw new appError("Senhas não coincidem!")
        const newPassword = await hash(password, 8)
        
        await database("users").insert({name, email, password: newPassword})

        res.json()
    }
}

module.exports = usersController