console.log("hello");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Here");
  res.send("Hi");
  res.sendStatus(500).send("Hiii");
});

app.listen(3000);
