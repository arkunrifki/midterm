import mongoose from "mongoose";

// TODO: this model for user and update user
const CommentSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      require: true,
      unique: true,
    },
    videoId: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);

// TODO: Selanjutnya untuk dapat menyimpan ke db maka dibutuhkan route
