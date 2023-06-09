const newsRouter = require("./news");
const roomRouter = require("./room");
const userRouter = require("./auth");
const orderRouter = require("./order");
const serviceRouter = require("./service");

function route(app) {
  app.use("/api/news", newsRouter);
  app.use("/api/room", roomRouter);
  app.use("/api/auth", userRouter);
  app.use("/api/order", orderRouter);
  app.use("/api/service", serviceRouter);

  app.all("*", (req, res) => res.send("That route doesn't exist"));
}

module.exports = route;
