import asyncHandler from "express-async-handler";
import sendMail from "./../service/sendEmail.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// @Description Fetch all products
// @routes GET/api/products
// @access public

export const geContact = asyncHandler(async (req, res) => {
  const { name, email } = req.body;
  sendMail(name, email);
  res.sendStatus(200);
});
