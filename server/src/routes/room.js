const express = require("express");
const router = express.Router();

const roomController = require("../app/controllers/RoomController");
const upload = require("../middlewares/multer");

// http://localhost:5000/api/room

router.get("/", roomController.readRoom);
router.get("/:slugRoom", roomController.getRoomBySlug);
router.get("/find/:_id", roomController.getRoomById);
router.post(
  "/create",
  upload.single("thumbnailRoom"),
  roomController.createRoom
);
router.put(
  "/update/:_id",
  upload.single("thumbnailRoom"),
  roomController.updateRoom
);

module.exports = router;
