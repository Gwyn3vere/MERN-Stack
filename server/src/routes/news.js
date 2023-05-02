const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");
const multer = require("../middlewares/multer");
const { newsValidator, validate } = require("../middlewares/newsValidator");

// http://localhost:5000/api/news

router.get("/", newsController.getNews);
router.post(
  "/create",
  multer.single("thumbnail"),
  newsValidator,
  validate,
  newsController.createNews
);
router.post("/update", newsController.updateNews);

module.exports = router;
