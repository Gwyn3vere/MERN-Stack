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

  async updateRoom(req, res) {
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

      const room = await Room.findById(req.params._id);

      if (!room) {
        return res.status(404).json({ message: "Room not found" });
      }

      room.nameRoom = nameRoom;
      room.slugRoom = slugRoom;
      room.priceRoom = priceRoom;
      room.quantityRoom = quantityRoom;
      room.numberCustomer = numberCustomer;
      room.bedRoom = bedRoom;
      room.descRoom = descRoom;
      room.typeRoom = typeRoom;
      room.acreageRoom = acreageRoom;
      room.codeRoom = codeRoom;
      room.amenitiesRoom = JSON.parse(amenitiesRoom);
      room.thumbnailRoom = thumbnailRoom;

      const updatedRoom = await room.save();
      res.json({ room: updatedRoom });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async updateQuantity(req, res) {
    try {
      const { quantityRoom } = req.body;
      const room = await Room.findById(req.params._id);
      if (!room) {
        return res.status(404).json({ message: "Room not found" });
      }
      room.quantityRoom = quantityRoom;
      const updatedRoom = await room.save();
      res.json({ room: updatedRoom });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async deleteRoom(req, res) {
    try {
      const { _id } = req.params;
      // Tìm phòng theo ID
      const room = await Room.findOneAndDelete(_id);
      if (!room) {
        return res.status(404).json({ message: "Phòng không tồn tại" });
      }
      res.json({ message: "Xoá phòng thành công" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Lỗi server" });
    }
  }

  async getRoomBySlug(req, res) {
    try {
      const { slugRoom } = req.params;
      const room = await Room.findOne({ slugRoom });
      if (!room) {
        return res.status(404).json({ message: "Room not found" });
      }
      return res.status(200).json({ room });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async getRoomById(req, res) {
    try {
      const roomId = req.params._id;
      const room = await Room.findById(roomId).populate("amenitiesRoom");
      if (!room) {
        return res.status(404).json({ message: "Không tìm thấy phòng" });
      }
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new RoomController();
