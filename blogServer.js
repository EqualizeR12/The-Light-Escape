const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.get("/admin", (req, res) => {
  res.sendFile(__dirname + "/dist/createArticle.html");
});

app.get("/createArticle.css", (req, res) => {
  res.sendFile(__dirname + "/dist/createArticle.css");
});

app.get("/createArticle.bundle.js", (req, res) => {
  res.sendFile(__dirname + "/dist/createArticle.bundle.js");
});

server.listen(process.env.PORT || 3001, () => {
  console.log("listening on 3001 port");
});
