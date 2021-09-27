import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import TestProduct from "../models/testModel.js";
import cloudinary from "../utils/cloudinary.js";
import {
  Color,
  Category,
  Keyword,
  Gender,
  Price,
  // MultipleQueries,
} from "../utils/queries.js";

// @Description Fetch all products
// @routes GET/api/products
// @access public

export const getProducts = asyncHandler(async (req, res) => {
  const keyword = Keyword(req);
  const category = Category(req);
  const color = Color(req);
  const gender = Gender(req);
  const price = Price(req);
  // const multipleQueries = MultipleQueries(req);

  const products = await Product.find({
    ...keyword,
  })
    .where({ ...category })
    .where({ ...color })
    .where({ ...gender })
    .where({ ...price })
    // .where({ ...multipleQueries })

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
  const menProduct = await Product.countDocuments({
    category: "men",
  });
  const womenProduct = await Product.countDocuments({
    category: "women",
  });
  const kidProduct = await Product.countDocuments({
    category: "kid",
  });
  res.json({
    countProducts: {
      black: blackProduct,
      white: whiteProduct,
      men: menProduct,
      women: womenProduct,
      kid: kidProduct,
    },
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
