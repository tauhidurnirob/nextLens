import asyncHandler from "express-async-handler";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import Product from "../models/productModel.js";
import TestProduct from "../models/testModel.js";

import cloudinaryApi from "../utils/cloudinary.js";

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

const storage = new CloudinaryStorage({
  cloudinary: cloudinaryApi,
  params: {
    folder: "NextLens",
  },
});

const upload = multer({ storage: storage });

export const createProduct = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    salesPrice,
    discount,
    countInStock,
    availability,
    image,
    type,
    category,
    frameMaterial,
    lensFunction,
    frameAttribution,
    frameLensMaterial,
    usage,
    modelNumber,
    size,
  } = req.body;

  console.log(image);
  const slug = `${title.split(" ").join("_")}_${modelNumber}`;

  const product = new TestProduct({
    title,
    description,
    price,
    salesPrice,
    discount,
    countInStock,
    availability,
    image: req.file,
    cloudinary_id: req.file.cloudinary_id,
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
