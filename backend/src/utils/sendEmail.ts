require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function sendEmail(
  email: string | string[],
  subject: string,
  body: string,
): Promise<boolean> {
  try {
    const info = await transporter.sendMail({
      from: "info@lifelog.com",
      to: email,
      subject: subject,
      text: body,
    });
    console.log("Message sent: %s", info.messageId);
    if (info.accepted.length > 0) {
      return true;
    } else {
      console.warn("Email was not accepted by the recipient server:", info);
      return false;
    }
  } catch (error) {
    console.error("Error sending email: ", error);
    return false;
  }
}
