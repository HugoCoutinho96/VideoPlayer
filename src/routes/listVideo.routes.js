const {Router} = require("express")
const router = Router()

const ListVideoController = require("../controllers/listVideoController")
const listVideoController = new ListVideoController()

router.get("/", listVideoController.index)
router.get("/:id", listVideoController.show)

module.exports = router