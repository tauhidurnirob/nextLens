import express from "express";

import { createCustomer } from "../controllers/stripeControllers.js";

const router = express.Router();

router.route("/").post(createCustomer);

export default router;
