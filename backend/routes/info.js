const express = require("express");
const router = express.Router();

const { getInfo, updateInfo } = require("../controllers/infoController");

router.route("/getAllInfo").get(getInfo);
router.route("/update/:id").put(updateInfo);
module.exports = router;
