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
    const {
      nameRoom,
      slugRoom,
      priceRoom,
      rateRoom,
      quantityRoom,
      numberCustomer,
      bedRoom,
      descRoom,
      typeRoom,
      acreageRoom,
      codeRoom,
      amenitiesRoom,
      thumbnailRoom,
    } = req.body;

    const formattedAmenitiesRoom = amenitiesRoom
      .split(",")
      .map((amenity) => amenity.trim());
    const formattedThumbnailRoom = {
      url: thumbnailRoom.url,
      public_id: thumbnailRoom.public_id,
    };

    const newRoom = new Room({
      nameRoom,
      slugRoom,
      priceRoom,
      rateRoom,
      quantityRoom,
      numberCustomer,
      bedRoom,
      descRoom,
      typeRoom,
      acreageRoom,
      codeRoom,
      amenitiesRoom: formattedAmenitiesRoom,
      thumbnailRoom: formattedThumbnailRoom,
    });

    try {
      await newRoom.save();
      res.status(201).json({ message: "Room created successfully", newRoom });
    } catch (error) {
      res.status(409).json({ message: error.message });
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
