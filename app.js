const http = require("http");
const express = require("express");
const app = express();
const logger = require("morgan");
const nunjucks = require("nunjucks");

app.engine("html", nunjucks.render);
app.set("view engine", "html");

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
    noCache: true
});
const PORT =  3000;

const obj = {
  title: "This is great",
  people: [{
    name: "xifeng"
  }, {
    name: "marshalee"
  }]
}
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
  res.render("index.html", obj);
});


app.listen(PORT, function() {
  console.log("The server is running at port: " + PORT);
});
