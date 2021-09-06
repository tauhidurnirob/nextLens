import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendMail = (name, email) => {
  const transporter = nodemailer.createTransport({
    service: process.env.USER,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: process.env.FORM,
    to: email,
    subject: "Support.next-lense",
    text: `Hey ${name}, Hey we will touch very soon.`,
    html: `Hello, <strong>${name}</strong> <br>
    <p> I hope you doing well. Our team will touch very soon.</p> <br>
    Thanks,<strong>Next-lense support team.</strong>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent");
    }
  });
};

export default sendMail;
