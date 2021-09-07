import express from "express";

import { createShipping } from "../controllers/shippingController.js";

const router = express.Router();

router.route("/").post(createShipping);

export default router;
