const {Router} = require("express")
const router = Router()

const listVideoRoutes = require("./listVideo.routes")
const usersRoutes = require("./users.routes")

router.use("/", listVideoRoutes)
router.use("/register", usersRoutes)