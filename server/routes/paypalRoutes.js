import express from "express";

import {
  createPaypal,
  successPayment,
} from "./../controllers/paypalControllers.js";

const router = express.Router();

router.route("/").post(createPaypal).get(successPayment);

export default router;
