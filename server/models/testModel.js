import mongoose from "mongoose";

const testSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    salesPrice: { type: String, required: true },
    discount: { type: String, required: true },
    countInStock: { type: String, required: true },
    availability: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    cloudinary_id: { type: String, required: true },
    slug: { type: String },
    details: {
      frameMaterial: { type: String, required: true },
      lensFunction: { type: String, required: true },
      frameAttribution: { type: String, required: true },
      frameLensMaterial: { type: String, required: true },
      usage: { type: String, required: true },
      modelNumber: { type: String, required: true },
      size: { type: String, required: true },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const TestProduct = mongoose.model("Test", testSchema);

export default TestProduct;
