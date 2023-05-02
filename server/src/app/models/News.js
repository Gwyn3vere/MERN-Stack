const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const News = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true },
    desc: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    thumbnail: {
      type: Object,
      url: { type: URL },
      public_id: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", News);
