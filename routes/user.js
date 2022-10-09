const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth");

router.post("/signup", userController.createUser);
router.get("/signup", userController.checkAccount);
router.post("/login", userController.login);
router.patch('/update', authMiddleware, userController.updateUserController);

module.exports = router;
