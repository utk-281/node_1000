const { Router } = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  updateUserDetails,
  deleteUserProfile,
  isLoggedIn,
} = require("../controllers/user.controller");
const { authenticate } = require("../middlewares/auth.middleware");

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.patch("/update-profile", updateUserDetails);
router.delete("/delete-profile", deleteUserProfile);

router.get("/is-logdedIn", authenticate, isLoggedIn);

module.exports = router;
