const Room = require("../models/Room");
const cloudinary = require("../../cloud");

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
      // Lưu ảnh lên cloudinary và lấy URL
      const thumbnailResult = await cloudinary.uploader.upload(
        req.files.thumbnailRoom[0].path
      );
      const libraryResult = await cloudinary.uploader.upload(
        req.files.libraryRoom[0].path
      );
      // Lưu thông tin phòng và URL ảnh vào database
      const newRoom = new Room({
        nameRoom: req.body.nameRoom,
        slugRoom: req.body.slugRoom,
        priceRoom: req.body.priceRoom,
        typeRoom: req.body.typeRoom,
        numberCustomer: req.body.numberCustomer,
        acreageRoom: req.body.acreageRoom,
        descRoom: req.body.descRoom,
        serviceRoom: req.body.serviceRoom,
        thumbnailRoom: {
          url: thumbnailResult.url,
          public_id: thumbnailResult.public_id,
        },
        libraryRoom: {
          url: libraryResult.url,
          public_id: libraryResult.public_id,
        },
      });
      await newRoom.save();
      res.status(201).send(newRoom);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  async updateRoom(req, res) {
    try {
      const id = req.params._id;
      const existingRoom = await Room.findById(id);

      let thumbnailUrl = existingRoom.thumbnailRoom.url;
      let thumbnailPublicId = existingRoom.thumbnailRoom.public_id;
      let libraryUrl = existingRoom.libraryRoom.url;
      let libraryPublicId = existingRoom.libraryRoom.public_id;

      if (req.files && req.files.thumbnailRoom) {
        const thumbnailResult = await cloudinary.uploader.upload(
          req.files.thumbnailRoom[0].path
        );
        thumbnailUrl = thumbnailResult.secure_url;
        thumbnailPublicId = thumbnailResult.public_id;
        // delete old thumbnail image
        if (existingRoom.thumbnailRoom.public_id) {
          await cloudinary.uploader.destroy(
            existingRoom.thumbnailRoom.public_id
          );
        }
      }

      if (req.files && req.files.libraryRoom) {
        const libraryResult = await cloudinary.uploader.upload(
          req.files.libraryRoom[0].path
        );
        libraryUrl = libraryResult.secure_url;
        libraryPublicId = libraryResult.public_id;
        // delete old library image
        if (existingRoom.libraryRoom.public_id) {
          await cloudinary.uploader.destroy(existingRoom.libraryRoom.public_id);
        }
      }

      const updatedRoom = await Room.findByIdAndUpdate(
        id,
        {
          nameRoom: req.body.nameRoom,
          slugRoom: req.body.slugRoom,
          priceRoom: req.body.priceRoom,
          typeRoom: req.body.typeRoom,
          numberCustomer: req.body.numberCustomer,
          acreageRoom: req.body.acreageRoom,
          descRoom: req.body.descRoom,
          serviceRoom: req.body.serviceRoom,
          thumbnailRoom: { url: thumbnailUrl, public_id: thumbnailPublicId },
          libraryRoom: { url: libraryUrl, public_id: libraryPublicId },
        },
        { new: true }
      );
      await updatedRoom.save();
      res.status(201).send(updatedRoom);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }

  async deleteRoom(req, res) {
    try {
      const deletedRoom = await Room.findByIdAndDelete(req.params._id);
      if (!deletedRoom) {
        return res.status(404).send({ error: "Room not found" });
      }
      // Xóa ảnh thumbnail của phòng trên Cloudinary
      await cloudinary.uploader.destroy(deletedRoom.thumbnailRoom.public_id);
      // Xóa ảnh thư viện của phòng trên Cloudinary
      await cloudinary.uploader.destroy(deletedRoom.libraryRoom.public_id);
      res.send({ message: "Room deleted successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "Internal server error" });
    }
  }
}

module.exports = new RoomController();
