const {Router} = require("express")
const router = Router()

const listVideoRoutes = require("./listVideo.routes")
const usersRoutes = require("./users.routes")

router.use("/listvideo", listVideoRoutes)
router.use("/register", usersRoutes)

module.exports = router