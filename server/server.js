import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "colors";
import morgan from "morgan";
import bodyParser from "body-parser";

import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import shippingRoutes from "./routes/shippingRoutes.js";
import stripeRoutes from "./routes/stripeRoutes.js";

const PORT = process.env.PORT || 5000;

const app = express();

// configs
app.use(morgan("dev"));
dotenv.config();
connectDB();

// Body parser

app.use(bodyParser.json());
app.use(cors());

// apis
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/shipping", shippingRoutes);
app.use("/api/config/stripe", stripeRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.CLIENT_ID);
});

// middleware
app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Server is running on http://localhost:${PORT}`.yellow.bold)
);
