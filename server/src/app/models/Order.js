const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    phone: { type: Number, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true, trim: true },
    adults: { type: Number, required: true, trim: true },
    children: { type: Number, required: true, trim: true },
    note: { type: String, required: false, trim: true },
    room: { type: String, required: true, trim: true },
    checkin: { type: Date, required: true, trim: true },
    checkout: { type: Date, required: true, trim: true },
    total: { type: Number, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
