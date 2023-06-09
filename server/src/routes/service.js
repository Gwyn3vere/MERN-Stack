const express = require("express");
const router = express.Router();

const serviceController = require("../app/controllers/ServiceController");

// http://localhost:5000/api/service

router.get("/", serviceController.readService);
router.get("/find/:_id", serviceController.getServiceById);
router.post("/create", serviceController.createService);
router.delete("/delete/:_id", serviceController.deleteService);

module.exports = router;
