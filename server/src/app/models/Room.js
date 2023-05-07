const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema(
  {
    nameRoom: { type: String, required: true, trim: true },
    slugRoom: { type: String, required: true, trim: true },
    priceRoom: { type: Number, required: true, trim: true },
    rateRoom: { type: Number, required: true, trim: true, default: 0 },
    quantityRoom: { type: Number, required: true, trim: true },
    numberCustomer: { type: Number, required: true, trim: true },
    bedRoom: { type: String, required: true, trim: true },
    descRoom: { type: String, required: true, trim: true },
    typeRoom: { type: String, required: true, trim: true },
    acreageRoom: { type: String, required: true, trim: true },
    codeRoom: { type: String, required: true, trim: true },
    amenitiesRoom: { type: [String], required: true, trim: true },
    thumbnailRoom: {
      type: Object,
      url: { type: URL },
      public_id: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);
