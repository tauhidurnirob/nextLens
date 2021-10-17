import express from "express";
import {
  authUser,
  getUsers,
  registerUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.route("/login").post(authUser);
router.route("/").post(registerUser).get(getUsers);

export default router;
