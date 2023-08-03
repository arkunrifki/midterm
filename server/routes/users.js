// import express from "express";
const express = require("express");
const User = require("../controllers/user");
const verifyToken = require("../middlewares/verfiyToken");

const router = express.Router();

//TODO: First step is make route to get db
//TODO: Second step is make controller function
//TODO: Third step is define to index.js

//Update user
router.put("/:id", User.update);

//Delete user
router.put("/:id", User.deleteuser);

//get a user
router.get("/find/:id", User.getuser);

//subscribe a user
router.put("/sub/:id", User.subscribe);

//unsubscribe a user
router.put("/unsub/:id", User.unsubscribe);

//like a video
router.put("/like/:videoId", User.like);

//dislike a video
router.put("/dislike/:videoId", User.dislike);

module.exports = router;
