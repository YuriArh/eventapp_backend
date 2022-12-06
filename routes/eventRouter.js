const Router = require("express");
const eventController = require("../controllers/eventController");

const router = new Router();

router.post("/");
router.get("/", eventController.getOne);
router.get("/:id");
router.delete("/");

module.exports = router;
