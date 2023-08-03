const User = require("../models/User");
const Video = require("../models/Video");
const createError = require("../utils/error");

const addVideo = async (req, res, next) => {
  const newVideo = new Video({ ...req.body });
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (err) {
    next(err);
  }
};
const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found!"));
    if (req.user.id === video.userId) {
      const updateVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateVideo);
    } else {
      return next(createError(403, "You can update only one!"));
    }
  } catch (err) {
    next(err);
  }
};
const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found!"));
    if (req.user.id === video.userId) {
      await Video.findByIdAndDelete(req.params.id);
      res.status(200).json("The video has been delete");
    } else {
      return next(createError(403, "You can delete only one!"));
    }
  } catch (err) {
    next(err);
  }
};
const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};
const addView = async (req, res, next) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res.status(200).json(" The video has been increased");
  } catch (err) {
    next(err);
  }
};
const random = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 1 } }]);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

const trend = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({ views: -1 });
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addVideo,
  deleteVideo,
  updateVideo,
  getVideo,
  addView,
  random,
  trend,
};
