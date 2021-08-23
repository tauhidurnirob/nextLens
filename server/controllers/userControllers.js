import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @Description Auth data
// @routes Post/api/users/login
// @access Public

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email, password: password });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

export const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  //   const { name, email, password } = req.body;

  //   const userExists = await User.find({ email });

  //   if (userExists) {
  //     res.status(400);
  //     throw new Error("User already exists");
  //   }

  //   const user = await User.create({
  //     name,
  //     email,
  //     password,
  //   });

  //   if (user) {
  //     res.status(201).json({
  //       _id: user._id,
  //       name: user.name,
  //       email: user.email,
  //       isAdmin: user.isAdmin,
  //       token: generateToken(user._id),
  //     });
  //   } else {
  //     res.status(400);
  //     throw new Error("Invalid user data");
  //   }
});
