import asyncHandler from "express-async-handler";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// @Description Fetch all products
// @routes GET/api/products
// @access public

export const geContact = asyncHandler(async (req, res) => {
  const { name, email } = req.body;
  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
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

  transporter.sendMail(mailOptions, function (error) {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});
