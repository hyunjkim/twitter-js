const http = require("http");
const express = require("express");
const app = express();
const logger = require("morgan");
const PORT =  3000;

app.use(logger(function(tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, "content-length"),
    "-",
    tokens["response-time"](req, res),
    "ms"
  ].join(" ");
}));

app.get("/", function(req, res) {
  res.end("Welcome to our site");
});

app.get("/special", function(req, res) {
  res.end("This is a special event");
});

app.listen(PORT, function() {
  console.log("The server is running at port: " + PORT);
});
