const express = require("express");
const video = require("../controllers/video");
const verifyToken = require("../middlewares/verfiyToken");
const router = express.Router();

// route.get("/", (req, res) => {
//   res.send("ini route movie data {videoID, URL Thumbnail}");
// });

// route.get("/movies");

// route.get("/top", (req, res) => {
//   res.render("../../user/view.ejs");
// });

// create video

router.post("/", video.addVideo);
router.put("/:id", video.updateVideo);
router.delete("/:id", video.deleteVideo);
router.get("/find/:id", video.getVideo);
router.put("/view/:id", video.addView);
router.get("/trend", video.trend);
router.get("/random", video.random);

module.exports = router;
