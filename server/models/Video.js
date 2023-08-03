const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    productId: { type: String, unique: true },
    tittle: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnailUrl: { type: String, required: true },
    youtubeUrl: { type: String, required: true },
    views: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: [String],
      default: [],
    },
    dislikes: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

//TODO: Make model from Schema
const Video = mongoose.model("Video", VideoSchema);

//TODO: Export the model for using in other place
module.exports = Video;
