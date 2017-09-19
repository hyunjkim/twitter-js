const express = require("express");
const users = express.Router();
const tweetBank = require("../tweetBank");

users.get("/", function(req, res) {
  const users = tweetBank.list();
  res.render("index", { users });
});

users.get("/:name", function(req, res) {
  const user = tweetBank.find({ name: req.params.name});
  res.render("index", { users: user});
});

module.exports = users;
