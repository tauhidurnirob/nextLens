import express from "express";

import { geContact } from "../controllers/contactController.js";

const router = express.Router();

router.route("/").post(geContact);

export default router;
