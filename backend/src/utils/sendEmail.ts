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
  email: string,
  otp: number,
): Promise<boolean> {
  try {
    const info = await transporter.sendMail({
      from: "info@lifelog.com",
      to: email,
      subject: "Verfication code for updating password.",
      text: `${otp} is your verificaition code. It is will be expired in 15 minutes.`,
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
