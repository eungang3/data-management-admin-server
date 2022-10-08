const express = require("express");
const centerController = require("../controllers/centerController");

const router = express.Router();

/** 데이터 저장 */
router.post("/insert", centerController.centerInsert);
/** API 입력코드 */
router.post("/api", centerController.centerData)

module.exports = router;