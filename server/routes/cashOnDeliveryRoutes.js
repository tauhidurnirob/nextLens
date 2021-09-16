import express from "express";

import { createCashOnDelivery } from "../controllers/cashOnDeliveryController.js";

const router = express.Router();

router.route("/").post(createCashOnDelivery);

export default router;
