const Order = require("../models/Order");

class OrderController {
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
      const {
        name,
        phone,
        email,
        quantity,
        adults,
        children,
        note,
        room,
        service,
        checkin,
        checkout,
        total,
        user,
      } = req.body;

      const order = new Order({
        name,
        phone,
        email,
        quantity,
        adults,
        children,
        note,
        room,
        service,
        checkin,
        checkout,
        total,
        user,
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

module.exports = new OrderController();
