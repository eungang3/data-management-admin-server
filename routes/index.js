const express = require("express");
const centerRouter = require("./centerRouter");
const userRouter = require("./user");
const downRouter = require("./downRouter.js");
const router = express.Router();

router.use("/centers", centerRouter);
router.use("/users", userRouter);
router.use("/download", downRouter);

module.exports = router;
