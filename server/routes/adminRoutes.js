import express from "express";
import {
  getAdminProducts,
  getAdminOrder,
} from "../controllers/adminController.js";

const router = express.Router();

router.route("/products").get(getAdminProducts);
router.route("/order").get(getAdminOrder);

export default router;
