const express = require("express");
const router = express.Router();

const orderController = require("../app/controllers/OrderController");

// http://localhost:5000/api/order

router.get("/", orderController.readOrder);
router.get("/find/:_id", orderController.getOrderById);
router.post("/create", orderController.createOrder);
router.delete("/delete/:_id", orderController.deleteOrder);

module.exports = router;
