const { Router } = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  updateUserDetails,
  deleteUserProfile,
  isLoggedIn,
  getUserProfile,
  updateUserPassword,
} = require("../controllers/user.controller");
const { authenticate } = require("../middlewares/auth.middleware");

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", authenticate, logoutUser);
router.patch("/update-profile", authenticate, updateUserDetails);
router.patch("/update-password", authenticate, updateUserPassword);
router.delete("/delete-profile", authenticate, deleteUserProfile);

router.get("/is-loggedIn", authenticate, isLoggedIn);

router.get("/profile/:id", authenticate, getUserProfile);

module.exports = router;
