const express = require("express");
const downController = require("../controllers/downController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", auth.authMiddleware, downController.getCenter);

module.exports = router;
