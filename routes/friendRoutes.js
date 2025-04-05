const express = require("express");
const router = express.Router();
const friends = require("../models/friends");

router.get("/", (req, res) => {
  res.json(friends);
});

router.get("/filter", (req, res) => {
  friendsController.filterFriends(req, res);
});

router.get("/info", (req, res) => {
  friendsController.info(req, res);
});

router.get("/:id", (req, res) => {
  friendsController.matchingId(req, res);
});

router.post("/", (req, res) => {
  friendsController.addFriend(req, res);
});

router.put("/:id", (req, res) => {
  friendsController.updateFriend(req, res);
});

module.exports = router;
