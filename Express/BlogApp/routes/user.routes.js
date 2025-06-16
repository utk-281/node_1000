const { Router } = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  updateUserDetails,
  deleteUserProfile,
} = require("../controllers/user.controller");

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.patch("/update-profile", updateUserDetails);
router.delete("/delete-profile", deleteUserProfile);

module.exports = router;
