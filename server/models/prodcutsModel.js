import mongoose from "mongoose";

const productsSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: Number, required: true },
    price: { type: String, required: true },
    salesPrice: { type: String, required: true },
    discount: { type: String, required: true },
    countInStock: { type: String, required: true },
    availability: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    slug: { type: String, required: true },
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

const Products = mongoose.model("Product", productsSchema);

export default Products;
