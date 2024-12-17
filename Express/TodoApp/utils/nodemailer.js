const nodemailer = require("nodemailer");

exports.sendEmail = async ({ email, message }) => {
  // console.log(email);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    auth: {
      user: "utkarshgupta.281@gmail.com",
      pass: "piwe xufn iorx eook",
    },
  });

  console.log(message);

  const options = {
    from: "utkarshgupta.281@gmail.com",
    to: email,
    subject: "password reset url",
    text: message,
  };

  await transporter.sendMail(options);
};
