const newsRouter = require("./news");
const roomRouter = require("./room");

function route(app) {
  app.use("/api/news", newsRouter);
  app.use("/api/room", roomRouter);

  app.all("*", (req, res) => res.send("That route doesn't exist"));
}

module.exports = route;
