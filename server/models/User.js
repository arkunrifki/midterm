// import mongoose from "mongoose";
const mongoose = require("mongoose");

// TODO: this model for user and update user
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    img: {
      type: String,
    },
    subcribers: {
      type: Number,
      default: 0,
    },
    subcriberdUsers: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
