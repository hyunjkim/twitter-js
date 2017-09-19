const express = require("express");
const router = express.Router();
const tweetBank = require("../tweetBank")

router.get("/", function (req,res) {
  let tweets = tweetBank.list();
  console.log(tweets);
  res.render("index", { tweets });
});

module.exports = router;
