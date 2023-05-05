const jwt = require("jsonwebtoken");
const Users = require("../models/Users");

class UserController {
  async readUser(req, res) {
    try {
      const userList = await Users.find();
      res.status(200).json(userList);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  // [GET] /Register
  async register(req, res) {
    const { email, password } = req.body;

    // Kiểm tra xem email đã được sử dụng chưa
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email đã được sử dụng" });
    }

    // Tạo một đối tượng User mới và lưu nó vào cơ sở dữ liệu
    const user = new Users({ email, password });
    await user.save();

    res.status(201).json({ user });
  }

  // [GET] /Login
  async login(req, res) {
    const { email, password } = req.body;

    // Tìm kiếm một đối tượng User với email trùng với email đăng nhập
    const user = await Users.findOne({ email });

    // Kiểm tra xem user tồn tại hay không
    if (!user) {
      return res
        .status(401)
        .json({ message: "Email hoặc mật khẩu không đúng" });
    }

    // So sánh password được nhập vào với password lưu trữ trong cơ sở dữ liệu
    if (password !== user.password) {
      return res
        .status(401)
        .json({ message: "Email hoặc mật khẩu không đúng" });
    }

    // Nếu email và password hợp lệ, tạo một mã thông báo JSON và gửi về cho client-side
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ user, token });
  }
}

module.exports = new UserController();
