const createError = require("../utils/error");
const Comment = require("../models/Comments");
const Video = require("../models/Video");

const addComent = async (req, res, next) => {
  const newComment = new Comment({ ...req.body });
  try {
    const savedComent = await newComment.save();
    res.status(200).send(savedComent);
  } catch (err) {
    next(err);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.paramas.id);
    const video = await Video.findById(res.params.id);
  } catch (err) {
    next(err);
  }
};
