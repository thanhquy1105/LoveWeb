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
const {
  getAllImage,
  getImage,
  insertImage,
  updateImage,
} = require("../controllers/ImageController");

router.route("/getShowDays").get(getShowDays);
router.route("/getShowFull").get(getShowFull);
router.route("/getAvatar").get(getAvatar);
router.route("/getAllImage").get(getAllImage);
router.route("/getImage").get(getImage);
router.route("/insertImage").post(insertImage);
router.route("/updateShowDays").post(updateShowDays);
router.route("/updateShowFull").post(updateShowFull);
router.route("/updateAvatar").post(updateAvatar);
router.route("/updateImage/:id").put(updateImage);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join("./client/build/index.html"));
});

module.exports = router;
