const express = require("express");
const router = express.Router();

const userController = require("../app/controllers/UserController");

// http://localhost:5000/api/user

router.get("/", userController.readUser);
router.post("/login", userController.login);
router.post("/register", userController.register);
router.put("/update-role/:_id", userController.updateRole);

module.exports = router;
