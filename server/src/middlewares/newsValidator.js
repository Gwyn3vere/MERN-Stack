const { check, validationResult } = require("express-validator");

exports.newsValidator = [
  check("title").trim().not().isEmpty().withMessage("News title is missing!"),
  check("slug").trim().not().isEmpty().withMessage("News slug is missing!"),
  check("desc")
    .trim()
    .not()
    .isEmpty()
    .withMessage("News description is missing!"),
  check("content")
    .trim()
    .not()
    .isEmpty()
    .withMessage("News content is missing!"),
];

exports.validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (error.length) {
    return res.status(401).json({ error: error[0].msg });
  }

  next();
};
