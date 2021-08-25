import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @Description Fetch all products
// @routes GET/api/products
// @access public

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  const topProduct = await Product.find({}).sort({ rating: -1 }).limit(3);
  res.json({
    products,
    topProduct,
  });
});

// @Description Fetch single products
// @routes GET/api/products/:id
// @access public

export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.find({ slug: req.params.id });
  console.log(product);
  // const newProducts = product?.map((item) => {
  //   return { slug: `${item.title.split(" ").join("_")}_${item.sku}` };
  // });
  // console.log(newProducts);
  // const findProduct = newProducts.find((item) => item.slug === req.params.id);
  // console.log(findProduct);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
