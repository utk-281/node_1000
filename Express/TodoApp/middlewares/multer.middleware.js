const multer = require("multer");

//! defining the temporary storage for file upload

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/temp");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
