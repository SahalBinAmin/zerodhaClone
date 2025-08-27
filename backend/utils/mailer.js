const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, 
  },
});

async function sendMail(to, subject, text) {
  try {
    await transporter.sendMail({
      from: `"Zerodha Clone" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });
    console.log(" Mail sent successfully!");
  } catch (err) {
    console.error(" Error sending mail:", err);
  }
}

module.exports = sendMail;
