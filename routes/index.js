const express = require("express");
const router = express.Router();
const tweetBank = require("../tweetBank");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({extended: false}));

router.get("/", function (req,res) {
  let tweets = tweetBank.list();
  res.render("index", { tweets, showForm: true });
});

router.post("/tweets", function (req, res) {
  let name = req.body.name;
  let text = req.body.text;
  tweetBank.add(name, text);
  res.redirect("/");
});


module.exports = router;
