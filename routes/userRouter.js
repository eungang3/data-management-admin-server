const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth");

router.post("/", userController.createUser);
router.get("/duplicate", userController.checkAccount);
router.post("/login", userController.login);
router.patch("/update", authMiddleware, userController.updateUserController);

module.exports = router;
