const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/FastTravel_dev", {
      useNewURLParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect to MongoDB is successfully!");
  } catch (error) {
    console.log("Connect to MongoDB is failure!");
  }
}

module.exports = { connect };
