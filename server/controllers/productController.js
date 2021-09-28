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
  LenseType,
  FrameStyle,
} from "../utils/queries.js";

// @Description Fetch all products
// @routes GET/api/products
// @access public

export const getProducts = asyncHandler(async (req, res) => {
  // const url = req.url.replace(/%20/g, "");
  // if (url) {
  //   return res.redirect(url);
  // }
  const keyword = Keyword(req);
  const category = Category(req);
  const color = Color(req);
  const gender = Gender(req);
  const price = Price(req);
  const lenseType = LenseType(req);
  const frameStyle = FrameStyle(req);

  const products = await Product.find({
    ...keyword,
  })
    .where({ ...category })
    .where({ ...color })
    .where({ ...gender })
    .where({ ...lenseType })
    .where({ ...frameStyle })
    .where({ ...price })

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
  const black = await Product.countDocuments({
    color: "black",
  });
  const white = await Product.countDocuments({
    color: "white",
  });
  const men = await Product.countDocuments({
    category: "men",
  });
  const women = await Product.countDocuments({
    category: "women",
  });
  const kid = await Product.countDocuments({
    category: "kid",
  });
  const frame = await Product.countDocuments({
    typeLense: "frame",
  });
  const basic = await Product.countDocuments({
    typeLense: "basic",
  });
  const standard = await Product.countDocuments({
    typeLense: "standard",
  });
  const premium = await Product.countDocuments({
    typeLense: "premium",
  });
  const blue = await Product.countDocuments({
    typeLense: "blue",
  });
  const halfFrame = await Product.countDocuments({
    frameStyle: "halfframe",
  });
  const fullFrame = await Product.countDocuments({
    frameStyle: "fullframe",
  });
  const rimless = await Product.countDocuments({
    frameStyle: "rimless",
  });
  const round = await Product.countDocuments({
    frameShape: "round",
  });
  const retroSquare = await Product.countDocuments({
    frameShape: "retrosquare",
  });
  const clubMaster = await Product.countDocuments({
    frameShape: "clubmaster",
  });
  const oval = await Product.countDocuments({
    frameShape: "oval",
  });
  const rectangle = await Product.countDocuments({
    frameShape: "rectangle",
  });
  const catEye = await Product.countDocuments({
    frameShape: "cateye",
  });

  const shopEconomy = await Product.countDocuments({
    shopCollection: "economy",
  });
  const shopPremium = await Product.countDocuments({
    shopCollection: "premium",
  });

  res.json({
    countProducts: {
      black,
      white,
      men,
      women,
      kid,
      frame,
      basic,
      standard,
      premium,
      blue,
      halfFrame,
      fullFrame,
      rimless,
      round,
      retroSquare,
      clubMaster,
      oval,
      rectangle,
      catEye,
      shopEconomy,
      shopPremium,
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
