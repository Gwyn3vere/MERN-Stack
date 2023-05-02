const News = require("../models/News");
const cloudinary = require("../../cloud");

class NewsController {
  // [GET] /readNews
  async getNews(req, res) {
    try {
      const news = await News.find();
      console.log("news", news);
      res.status(200).json(news);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  // [POST] /createNews
  async createNews(req, res) {
    try {
      const creNews = req.body;
      const { file } = req;
      const isAlreadyExists = await News.findOne({ slug });

      const newsC = new News(creNews);

      if (isAlreadyExists)
        return res.status(401).json({ error: "Please use unique slug!" });

      if (file) {
        const { secure_url: url, public_id } = await cloudinary.uploader.upload(
          file.path
        );
        newsC.thumbnail = { url, public_id };
      }

      await newsC.save();

      res.status(200).json(newsC);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  // [PUT] /updateNews
  async updateNews(req, res) {
    try {
      const updNews = req.body;

      const newsC = await News.findOneAndUpdate(
        { _id: updateNews._id },
        updateNews,
        { new: true }
      );

      res.status(200).json(newsC);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}

module.exports = new NewsController();
