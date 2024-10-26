const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail', // or any other service you are using
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = (to, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: 'Contact Form Submission',
    text: `Hello ${name},\n\nThank you for contacting us! We will respond to you soon.\n\nBest regards,\nAvinesh`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
