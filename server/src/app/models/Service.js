const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema(
  {
    category: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    total: { type: Number, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
