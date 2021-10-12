import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  getCountProducts,
  createProductReview,
} from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, createProduct);
router.route("/count").get(getCountProducts);
router.route("/:id").get(getProductById);
router.route("/:id/reviews").post(protect, createProductReview);

export default router;
