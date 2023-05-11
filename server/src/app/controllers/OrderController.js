const Order = require("../models/Order");

class RoomController {
  async readOrder(req, res) {
    try {
      const orderList = await Order.find();
      res.status(200).json(orderList);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  async createOrder(req, res) {
    try {
      const order = new Order({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        quantity: req.body.quantity,
        adults: req.body.adults,
        children: req.body.children,
        note: req.body.note,
        room: req.body.room,
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        total: req.body.total,
        user: req.body.user,
      });
      const savedOrder = await order.save();
      res.status(201).json(savedOrder);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }

  async deleteOrder(req, res) {}

  async getOrderById(req, res) {}
}

module.exports = new RoomController();
