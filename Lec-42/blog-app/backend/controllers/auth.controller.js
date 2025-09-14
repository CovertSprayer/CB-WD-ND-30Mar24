const UserModel = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET=process.env.JWT_SECRET;

module.exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username)
      res.status(400).json({ success: false, message: "username required" });
    if (!password)
      res.status(400).json({ success: false, message: "password required" });

    const user = await UserModel.findOne({username});

    if(!user) {
      return res.status(400).json({
        success: false,
        message: "Username or password not correct"
      })
    }

    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid) {
      return res.status(400).json({
        success: false,
        message: "Username or password not correct"
      })
    }

    const token = jwt.sign({ id: user._id, username}, JWT_SECRET, {
      expiresIn: "7d"
    })

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      data: {
        token,
        user: {
          _id: user._id,
          username: user.username,
          email: user.email
        }
      }
    })


  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
      error: error
    })
  }
};

/**
 *
 * {
 *  success: true | false,
 *  message: "Success",
 *  data: []
 * }
 *
 */

module.exports.register = async (req, res) => {
  try {
    let { username, fullName, email, password } = req.body;

    if (!username)
      res.status(400).json({ success: false, message: "username required" });
    if (!email)
      res.status(400).json({ success: false, message: "email required" });
    if (!password)
      res.status(400).json({ success: false, message: "password required" });
    if(!fullName)
      res.status(400).json({ success: false, message: "fullName required" });
      
    fullName = fullName.trim();
    const user = await UserModel.findOne({ username });
    if (user) {
      return res.status(200).json({
        success: true,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await UserModel.create({
      username,
      email,
      fullName,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
      error: error,
    });
  }
};
