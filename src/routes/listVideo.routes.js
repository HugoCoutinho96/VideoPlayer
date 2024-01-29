const {Router} = require("express")
const router = Router()

const ListVideoController = require("../controllers/listVideoController")
const listVideoController = new ListVideoController()

router.get("/:user_id", listVideoController.index)
router.put("/:id", listVideoController.update)
router.post("/", listVideoController.create)
router.delete("/", listVideoController.delete)

module.exports = router