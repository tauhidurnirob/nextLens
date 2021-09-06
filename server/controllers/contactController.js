import asyncHandler from "express-async-handler";
import sendMail from "./../service/sendEmail.js";

// @Description Fetch all products
// @routes GET/api/products
// @access public

export const geContact = asyncHandler(async (req, res) => {
  sendMail();
});
