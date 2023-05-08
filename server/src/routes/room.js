const express = require("express");
const router = express.Router();

const roomController = require("../app/controllers/RoomController");
const upload = require("../middlewares/multer");

// http://localhost:5000/api/room

router.get("/", roomController.readRoom);
router.post(
  "/create",
  upload.single("thumbnailRoom"),
  roomController.createRoom
);

module.exports = router;
