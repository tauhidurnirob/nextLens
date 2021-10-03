import asyncHandler from "express-async-handler";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// @Description Post shipping
// @routes POST/api/shipping
// @access public

export const createShipping = asyncHandler(async (req, res) => {
  res.sendStatus(200);
});
