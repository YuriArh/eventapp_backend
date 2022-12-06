const Router = require("express");
const eventRouter = require("./eventRouter");

const router = new Router();

router.use("/event", eventRouter);

module.exports = router;
