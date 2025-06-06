const { createReadStream } = require("fs");

//! get home page
const displayHomePage = (req, res) => {
  createReadStream("./Pages/index.html", "utf-8").pipe(res);
};

//! get feedback form
const displayFeedbackForm = (req, res) => {
  createReadStream("./Pages/form.html", "utf-8").pipe(res);
};

//! post feedback
const handleFeedbackFormSubmission = async (req, res) => {};

//! get all feedbacks
const getAllFeedbacks = async (req, res) => {};

module.exports = {
  displayFeedbackForm,
  displayHomePage,
  handleFeedbackFormSubmission,
  getAllFeedbacks,
};
