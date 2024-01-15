class usersController{
    async create(req, res){
        const {name} = req.body
        res.send(name)
    }
}

module.exports = usersController