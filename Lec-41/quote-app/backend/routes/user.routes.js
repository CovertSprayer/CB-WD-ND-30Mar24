const router = require('express').Router();
const { auth } = require('../middlewares/auth');
const UserModel = require('../models/User.model');
const api = require("../utils/api");

router.get("/me", auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await UserModel.findById(userId, "-password");
    api.success(res, user);
  } catch (error) {
    api.error(res, error.message);
  }
})

module.exports = router;