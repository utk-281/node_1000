const { Router } = require("express");
const { fetchAllUsers } = require("../controllers/admin.controller");
const { authenticate, authorize } = require("../middlewares/auth.middleware");
const router = Router();

router.get("/all", authenticate, authorize, fetchAllUsers);

module.exports = router;
