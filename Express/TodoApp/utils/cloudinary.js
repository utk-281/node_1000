const { v2 } = require("cloudinary");
const fs = require("fs");
const asyncHandler = require("express-async-handler");
const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET_KEY,
} = require("../config");

v2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET_KEY,
});

exports.uploadOnCloudinary = asyncHandler(async (path) => {
  if (!path) return null;

  let response = await v2.uploader.upload(path, {
    resource_type: "auto",
  });

  //! delete the file once uploaded
  fs.unlinkSync(path);

  return response;
  /* {
    url: response.secure_url,
    asset_id: response.asset_id,
    public_id: response.public_id,
    .....
  } */
});
