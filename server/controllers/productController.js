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
  FrameShape,
  ShopCollection,
} from "../utils/queries.js";

// @Description Fetch all products
// @routes GET/api/products
// @access public

export const getProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        title: { $regex: req.query.keyword, $options: "i" },
      }
    : {};

  const category = req.query.keyword
    ? {
        title: { $regex: req.query.keyword, $options: "i" },
      }
    : {};
  const color =
    req.query.black || req.query.white
      ? {
          color: [req.query.black, req.query.white],
        }
      : {};
  const gender =
    req.query.men || req.query.women || req.query.kid
      ? {
          category: [req.query.men, req.query.women, req.query.kid],
        }
      : {};
  const price =
    req.query.lowPrice || req.query.highPrice
      ? {
          price: {
            $gte: +req.query.lowPrice,
            $lte: +req.query.highPrice,
          },
        }
      : {};
  const lenseType =
    req.query.frame ||
    req.query.basic ||
    req.query.standard ||
    req.query.premium ||
    req.query.blue
      ? {
          typeLense: [
            req.query.frame,
            req.query.basic,
            req.query.standard,
            req.query.premium,
            req.query.blue,
          ],
        }
      : {};
  const frameStyle =
    req.query.halfFrame || req.query.fullFrame || req.query.rimless
      ? {
          frameStyle: [
            req.query.halfFrame,
            req.query.fullFrame,
            req.query.rimless,
          ],
        }
      : {};
  const frameShape =
    req.query.round ||
    req.query.retroSquare ||
    req.query.clubMaster ||
    req.query.oval ||
    req.query.rectangle ||
    req.query.catEye
      ? {
          frameShape: [
            req.query.round,
            req.query.retroSquare,
            req.query.clubMaster,
            req.query.oval,
            req.query.rectangle,
            req.query.catEye,
          ],
        }
      : {};
  const shopCollection =
    req.query.shopEconomy || req.query.shopPremium
      ? {
          shopCollection: [req.query.shopEconomy, req.query.shopPremium],
        }
      : {};

  const products = await Product.find({
    ...keyword,
  })
    .where({ ...price })
    .where({ ...category })
    .where({ ...color })
    .where({ ...gender })
    .where({ ...lenseType })
    .where({ ...frameStyle })
    .where({ ...frameShape })
    .where({ ...shopCollection })

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
    category: "man",
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

// @Description Create new Review
// @routes Post/api/products/:id/reviews
// @access Private

export const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }
    const review = {
      name: req.user.name,
      email: req.user.email,
      rating: +rating,
      comment,
      user: req.user._id,
    };
    product.reviews.push(review);
    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    const reviewSaved = await product.save();
    res.status(201).json({ message: "Review added" });
    return reviewSaved;
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
