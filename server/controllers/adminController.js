import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import { AdminQuery, AdminCategory } from "../utils/queries.js";

// @Description Fetch all products
// @routes GET/api/admin/products
// @access private

export const getAdminProducts = asyncHandler(async (req, res) => {
  const adminKeyword = req.query.adminKeyword
    ? {
        title: { $regex: req.query.adminKeyword, $options: "i" },
      }
    : {};
  const adminCategory = req.query.adminCategory
    ? {
        category: [req.query.adminCategory],
      }
    : {};

  const adminProducts = await Product.find({ ...adminKeyword })
    .where({ ...adminCategory })
    .limit(+req.query.limit)
    .skip(+req.query.start);

  const highToLow = await Product.find({})
    .sort({ price: -1 })
    .limit(12)
    .skip(4);
  const lowToHigh = await Product.find({}).sort({ price: 1 }).limit(12).skip(4);

  res.json({ adminProducts, highToLow, lowToHigh });
});
