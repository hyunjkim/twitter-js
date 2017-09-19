const express = require("express");
const tweets = express.Router();
const tweetBank = require("../tweetBank");

tweets.get("/", function(req, res) {
  const users = tweetBank.list();
  res.render("index", { users });
});

tweets.get("/:id", function(req, res) {
  const id = Number(req.params.id);
  const user = tweetBank.find({ id });
  res.render("index", { users: user });
});

module.exports = tweets;
