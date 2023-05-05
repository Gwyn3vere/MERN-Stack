const newsRouter = require("./news");
const roomRouter = require("./room");
const userRouter = require("./auth");

function route(app) {
  app.use("/api/news", newsRouter);
  app.use("/api/room", roomRouter);
  app.use("/api/auth", userRouter);

  app.all("*", (req, res) => res.send("That route doesn't exist"));
}

module.exports = route;
