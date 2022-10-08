const express = require("express");
const centerRouter = require("./centerRouter")
const userRouter = require("./user");
const router = express.Router();

router.use("/centers", centerRouter)
router.use("/users", userRouter);

module.exports = router;
