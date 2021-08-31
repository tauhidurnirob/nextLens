import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "colors";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";

import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const PORT = process.env.PORT || 5000;

const app = express();

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
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

// middleware
app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Server is running on http://localhost:${PORT}`.yellow.bold)
);
