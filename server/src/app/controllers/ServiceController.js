const Service = require("../models/Service");

class ServiceController {
  async readService(req, res) {
    try {
      const orderList = await Service.find();
      res.status(200).json(orderList);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  async createService(req, res) {
    try {
      const { category, name, total } = req.body;

      const service = new Service({
        category,
        name,
        total,
      });
      const savedService = await service.save();
      res.status(201).json(savedService);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }

  async deleteService(req, res) {}

  async getServiceById(req, res) {}
}

module.exports = new ServiceController();
