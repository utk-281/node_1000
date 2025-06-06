const { Router } = require("express");
const {
  displayHomePage,
  displayFeedbackForm,
  handleFeedbackFormSubmission,
  getAllFeedbacks,
} = require("./controller");

const router = Router();

router.get("/", displayHomePage);

router.get("/form", displayFeedbackForm);

router.get("/all-feedbacks", getAllFeedbacks);

router.post("/submit", handleFeedbackFormSubmission);

module.exports = router;
