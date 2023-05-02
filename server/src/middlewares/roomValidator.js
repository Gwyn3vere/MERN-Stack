const { check, validationResult } = require("express-validator");

exports.roomValidator = [
  check("nameRoom").trim().not().isEmpty().withMessage("Room name is missing!"),
  check("slugRoom").trim().not().isEmpty().withMessage("Room slug is missing!"),
  check("priceRoom")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Room price is missing!"),
  check("typeRoom").trim().not().isEmpty().withMessage("Room type is missing!"),
  check("numberCustomer")
    .trim()
    .not()
    .isEmpty()
    .withMessage("The number of customer is missing!"),
  check("acreageRoom")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Room acreage is missing!"),
  check("descRoom").trim().not().isEmpty().withMessage("Room desc is missing!"),
  check("serviceRoom")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Room service is missing!"),
];

exports.validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (error.length) {
    return res.status(401).json({ error: error[0].msg });
  }

  next();
};
