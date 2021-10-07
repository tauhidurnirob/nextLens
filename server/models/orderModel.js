import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    order_id: { type: String, required: true },
    address: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    status: { type: String, required: true },
    customer: { type: String, required: true },
    contact: { type: String, required: true },
    price: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
