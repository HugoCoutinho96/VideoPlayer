const appError = require("../utils/appError")
const database = require("../database/knex")
const {hash, compare} = require("bcryptjs")

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

    async update(req, res){
        const {id} = req.params
        const {name, email, newPassword, oldPassword} = req.body

        const emailExist = await database("users").where({email}).first()
        const password = await database("users").where({password: oldPassword})

        if(!name) throw new appError("Digite o nome!")
        if(!email) throw new appError("Digite seu email")
        if(emailExist) throw new appError("Email já cadastrado!")
        if(!password) throw new appError("Digite sua nova senha!")
        if(!oldPassword) throw new appError("Digite sua senha antiga!")

        const passwordCheck = compare(newPassword,)
    }

    async delete(req, res){
        const {id} = req.params

        await database("users").where({id}).delete()
        res.json()
    }
}

module.exports = usersController