import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    availability: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    color: {
      type: String,
      trim: true,
      lowercase: true,
    },
    typeLense: {
      type: String,
      trim: true,
      lowercase: true,
    },
    frameStyle: {
      type: String,
      trim: true,
      lowercase: true,
    },
    frameShape: {
      type: String,
      trim: true,
      lowercase: true,
    },
    shopCollection: {
      type: String,
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    cloudinary_id: {
      type: String,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    slug: { type: String, required: true },
    sku: { type: String, required: true },
    sizeGuide: { type: String },
    detailsImage: [
      {
        image: { type: String },
      },
    ],
    details: {
      modelNumber: { type: String },
      size: { type: String },
      frameMaterial: { type: String },
      frameLensMaterial: { type: String },
      frameAttribution: { type: String },
      usage: { type: String },
      lensFunction: { type: String },
    },

    listType: [
      {
        list: { type: String },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
