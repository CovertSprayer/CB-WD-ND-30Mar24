const router = require("express").Router();
const { isLoggedIn } = require("../../middlewares/authenticate");
const UserModel = require("../../models/User.model");

router.post("/products/:productId/wishlist", isLoggedIn, async (req, res) => {
  try {
    const userId = req?.user?._id;
    const productId = req.params.productId;

    const user = await UserModel.findById(userId);
    const wishlist = user.wishlist;

    const index = wishlist.findIndex((id) => id == productId);

    if(index == -1) {
      user.wishlist.push(productId);
    } else {
      user.wishlist.splice(index, 1);
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: index == -1 ? "Product added to wishlist" : "Product removed from wishlist"
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Something went wrong"
    })
  }
})

module.exports = router;