const crypto = require("crypto");
require("dotenv").config();

// process.env.UV_THREADPOOL_SIZE = 8;

const startTime = Date.now();

crypto.pbkdf2("Password", "salt", 1000, 512, "sha256", () => {
  console.log(`for first function ${Date.now() - startTime} ms`);
});

crypto.pbkdf2("Password", "salt", 1000, 512, "sha256", () => {
  console.log(`for second function ${Date.now() - startTime} ms`);
});

crypto.pbkdf2("Password", "salt", 1000, 512, "sha256", () => {
  console.log(`for third function ${Date.now() - startTime} ms`);
});

crypto.pbkdf2("Password", "salt", 1000, 512, "sha256", () => {
  console.log(`for fourth function ${Date.now() - startTime} ms`);
});

crypto.pbkdf2("Password", "salt", 1000, 512, "sha256", () => {
  console.log(`for fifth function ${Date.now() - startTime} ms`);
});
