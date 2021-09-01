import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  getProductByCategory,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProductById);
router.route("/category/:id").get(getProducts);

export default router;
