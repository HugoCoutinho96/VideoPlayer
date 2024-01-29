const {Router} = require("express")
const router = Router()
const UsersController = require("../controllers/usersController")
const usersController = new UsersController()

router.post("/register", usersController.create)
router.put("/:id", usersController.update)

module.exports = router