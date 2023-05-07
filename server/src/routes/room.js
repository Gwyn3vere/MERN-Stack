const express = require("express");
const router = express.Router();

const roomController = require("../app/controllers/RoomController");
const upload = require("../middlewares/multer");
const { roomValidator, validate } = require("../middlewares/roomValidator");

// http://localhost:5000/api/room

router.get("/", roomController.readRoom);
router.post(
  "/create",

  roomController.createRoom
);
router.put(
  "/update/:_id",

  roomController.updateRoom
);
router.delete("/delete/:_id", roomController.deleteRoom);

module.exports = router;
