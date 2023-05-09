const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewURLParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect to MongoDB is successfully!");
  } catch (error) {
    console.log("Connect to MongoDB is failure!");
  }
}

module.exports = { connect };
