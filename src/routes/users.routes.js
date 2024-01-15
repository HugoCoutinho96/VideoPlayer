const {Router} = require("express")
const router = Router()
const UsersController = require("../controllers/usersController")
const usersController = new UsersController()

router.post("/", usersController.create)

module.exports = router