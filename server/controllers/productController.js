import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import TestProduct from "../models/testModel.js";
import cloudinary from "../utils/cloudinary.js";

// @Description Fetch all products
// @routes GET/api/products
// @access public

export const getProducts = asyncHandler(async (req, res) => {
  const category = req.query.category
    ? {
        category: req.query.category,
      }
    : {};

  const color =
    req.query.black || req.query.white
      ? {
          color: req.query.black || req.query.white,
        }
      : {};
  const test =
    req.query.black === "black" && req.query.white === "white"
      ? { color: { $gte: "black", $lte: "white" } }
      : {};

  const keyword = req.query.keyword
    ? {
        title: { $regex: req.query.keyword, $options: "i" },
      }
    : {};

  const products = await Product.find({
    ...keyword,
  })
    .where({ ...category })
    .where({ ...color })
    .where({ ...test })
    .where({
      price: {
        $gte: +req.query.lowPrice || 0,
        $lte: +req.query.highPrice || 2000000,
      },
    })
    .limit(+req.query.limit)
    .skip(+req.query.start);

  const topMaxProduct = await Product.find({}).sort({ price: -1 }).limit(1);

  res.json({
    products,
    topMaxProduct,
  });
});

// @Description Fetch all products count
// @routes GET/api/products/count
// @access public

export const getCountProducts = asyncHandler(async (req, res) => {
  const blackProduct = await Product.countDocuments({
    color: "black",
  });
  const whiteProduct = await Product.countDocuments({
    color: "white",
  });
  res.json({
    countProducts: { black: blackProduct, white: whiteProduct },
  });
});

// @Description Fetch single products
// @routes GET/api/products/:id
// @access public

export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.find({ slug: req.params.id });

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @Description Create Product
// @routes Post/api/products
// @access Private/Admin

export const createProduct = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    salesPrice,
    discount,
    countInStock,
    availability,
    type,
    category,
    frameMaterial,
    lensFunction,
    frameAttribution,
    frameLensMaterial,
    usage,
    modelNumber,
    size,
    imageUri,
  } = req.body;

  const result = await cloudinary.uploader.upload(imageUri, {
    upload_preset: "ml_default",
  });

  const slug = `${title.split(" ").join("_")}_${modelNumber}`;

  const product = new TestProduct({
    title,
    description,
    price,
    salesPrice,
    discount,
    countInStock,
    availability,
    image: result.secure_url,
    cloudinary_id: result.public_id,
    type,
    slug,
    category,
    details: {
      frameMaterial,
      lensFunction,
      frameAttribution,
      frameLensMaterial,
      usage,
      modelNumber,
      size,
    },
  });
  const createProduct = await product.save();
  res.status(201).json(createProduct);
});
