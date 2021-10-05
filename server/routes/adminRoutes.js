import express from "express";
import {
    getAdminProducts,
} from "../controllers/adminController.js";

const router = express.Router();

router.route("/products").get(getAdminProducts)

export default router;
