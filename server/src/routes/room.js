const express = require("express");
const router = express.Router();

const roomController = require("../app/controllers/RoomController");
const upload = require("../middlewares/multer");
const { roomValidator, validate } = require("../middlewares/roomValidator");

// http://localhost:5000/api/room

router.get("/", roomController.readRoom);
router.post(
  "/create",
  upload.fields([
    { name: "thumbnailRoom", maxCount: 1 },
    { name: "libraryRoom", maxCount: 1 },
  ]),
  roomController.createRoom
);
router.put(
  "/update/:_id",
  upload.fields([
    { name: "thumbnailRoom", maxCount: 1 },
    { name: "libraryRoom", maxCount: 1 },
  ]),
  roomController.updateRoom
);
router.delete("/delete/:_id", roomController.deleteRoom);

module.exports = router;
