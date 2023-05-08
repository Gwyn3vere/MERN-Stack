const Room = require("../models/Room");

class RoomController {
  async readRoom(req, res) {
    try {
      const roomList = await Room.find();
      res.status(200).json(roomList);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  async createRoom(req, res) {
    try {
      const {
        nameRoom,
        slugRoom,
        priceRoom,
        quantityRoom,
        numberCustomer,
        bedRoom,
        descRoom,
        typeRoom,
        acreageRoom,
        codeRoom,
        amenitiesRoom,
      } = req.body;

      const thumbnailRoom = {
        url: req.file ? req.file.path : "",
        public_id: req.file ? req.file.filename : "",
      };

      const room = new Room({
        nameRoom,
        slugRoom,
        priceRoom,
        quantityRoom,
        numberCustomer,
        bedRoom,
        descRoom,
        typeRoom,
        acreageRoom,
        codeRoom,
        amenitiesRoom: JSON.parse(amenitiesRoom),
        thumbnailRoom,
      });

      const newRoom = await room.save();
      res.status(201).json({ room: newRoom });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = new RoomController();
