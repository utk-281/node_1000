const { Router } = require("express");
const {
  registerUser,
  fetchAll,
  login,
  logout,
  updatePassword,
  generateResetPasswordUrl,
  resetPassword,
} = require("../controllers/users.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const upload = require("../middlewares/multer.middleware");

const router = Router();

router.post("/register", upload.single("profilePicture"), registerUser);
router.post("/login", login);
router.get("/logout", logout);

router.patch("/update-password", authenticate, updatePassword);

router.post("/reset-password-url", generateResetPasswordUrl);

router.post("/reset-password/:resetToken", resetPassword);

module.exports = router;
