const express = require("express");
const centerRouter = require("./centerRouter");
const userRouter = require("./userRouter");
const downRouter = require("./downRouter.js");
const router = express.Router();

router.use("/center", centerRouter);
router.use("/user", userRouter);
router.use("/download", downRouter);

module.exports = router;
