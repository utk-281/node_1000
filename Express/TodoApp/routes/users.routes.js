const { Router } = require("express");
const {
  registerUser,
  fetchAll,
  login,
  logout,
  updatePassword,
} = require("../controllers/users.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const upload = require("../middlewares/multer.middleware");

const router = Router();

router.post("/register", upload.single("profilePicture"), registerUser);
router.post("/login", login);
router.get("/logout", logout);

router.patch("/update-password", authenticate, updatePassword);

module.exports = router;
