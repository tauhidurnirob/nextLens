import path from "path";
import express from "express";
import multer from "multer";
import cloudinary from "../utils/cloudinary.js";
import streamifier from "streamifier";

const router = express.Router();

const fileUpload = multer();

router.post("/", fileUpload.single("image"), function (req, res, next) {
  let streamUpload = (req) => {
    return new Promise((resolve, reject) => {
      let stream = cloudinary.uploader.upload_stream((error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      });
      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });
  };

  async function upload(req) {
    try {
      await streamUpload(req);
    } catch (error) {
      console.log(error);
    }
  }

  upload(req);
  res.send(streamUpload);
});

export default router;
