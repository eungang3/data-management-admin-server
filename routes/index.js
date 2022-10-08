const express = require("express");
const centerRouter = require("./centerRouter")
const router = express.Router();

router.use("/centers", centerRouter)

module.exports = router;
