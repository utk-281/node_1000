const { createReadStream } = require("fs");
const { connectDB } = require("./db");
const path = require("path");
const { log } = require("console");

//! get home page
const displayHomePage = (req, res) => {
  let filePath = path.join(__dirname, "Pages", "index.html");
  createReadStream(filePath, "utf-8").pipe(res);
};

//! get feedback form
const displayFeedbackForm = (req, res) => {
  try {
    let filePath = path.join(__dirname, "Pages", "form.html");
    let stream = createReadStream(filePath, "utf-8");
    stream.pipe(res);

    // let finalData = "";

    // stream.on("data", (chunk) => {
    //   finalData += chunk;
    // });

    // stream.on("end", () => {
    //   res.send(finalData);
    // });

    // stream.on("error", (err) => {
    //   console.log(err);
    //   return res.send("error occurred while loading form page");
    // });
  } catch (error) {
    console.log(error);
    res.send("error occurred while loading form page");
  }
};

//! post feedback
const handleFeedbackFormSubmission = async (req, res) => {
  try {
    console.log(req.body);
    //? get the data
    let { name, phoneNumber, feedback } = req.body;
    let myCollection = await connectDB();
    let newFeedback = await myCollection.insertOne({ name, phoneNumber, feedback });
    console.log(newFeedback);
    // res.send("feedback submitted");
    res.json({ success: true, message: "feedback submitted", newFeedback });
  } catch (error) {
    console.log(error);
    res.send("error while submitting feedback");
  }
};

//! get all feedbacks
const getAllFeedbacks = async (req, res) => {
  let myCollection = await connectDB();
  let feedbacks = await myCollection.find().toArray();
  res.send(feedbacks);
};

module.exports = {
  displayFeedbackForm,
  displayHomePage,
  handleFeedbackFormSubmission,
  getAllFeedbacks,
};
