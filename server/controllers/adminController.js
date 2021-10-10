import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";

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

  res.json(adminProducts);
});

// @Description Fetch all products
// @routes GET/api/admin/order
// @access private

export const getAdminOrder = asyncHandler(async (req, res) => {
  const status = req.query.status
    ? {
        status: [req.query.status],
      }
    : {};

  const payment = req.query.payment
    ? {
        paymentMethod: [req.query.payment],
      }
    : {};

  const orderProducts = await Order.find({ ...status })
    .where({ ...payment })
    .limit(+req.query.orderLimit);

  res.json(orderProducts);
});
