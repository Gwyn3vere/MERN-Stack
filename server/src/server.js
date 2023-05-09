const express = require("express");
const cors = require("cors");
const route = require("./routes");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT;
const bodyParser = require("body-parser");
const db = require("./config/connection");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

// Connect to MongoDB
db.connect();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

// Cấu hình truy cập vào các file upload
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// HTTP logger
app.use(morgan("dev"));

// Routes init
route(app);

app.listen(PORT, () => {
  console.log(`Connect to server is successfully with PORT: ${PORT}`);
});
