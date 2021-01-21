const express = require("express");
const router = express.Router();

const {
  getShowDays,
  updateShowDays,
} = require("../controllers/ShowDaysController");

const {
  updateShowFull,
  getShowFull,
} = require("../controllers/ShowFullController");

const { getAvatar, updateAvatar } = require("../controllers/AvatarController");

router.route("/getShowDays").get(getShowDays);
router.route("/getShowFull").get(getShowFull);
router.route("/getAvatar").get(getAvatar);
router.route("/updateShowDays/:id").put(updateShowDays);
router.route("/updateShowFull/:id").put(updateShowFull);
router.route("/updateAvatar/:id").put(updateAvatar);

module.exports = router;
