const express = require("express");
const bodyParser = require("body-parser");
const resultsRoutes = require("./api/routes/results");
const scoreboardRoutes = require("./api/routes/scoreboard");

const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://Andriejus2:AndriejusGataveckas@cluster0.4j9ufo3.mongodb.net/?retryWrites=true&w=majority",

    { useNewUrlParser: true }
  )
  .then(console.log("connected"))
  .catch((err) => {
    console.log("xxxxxxxxxxxxxxxxxx");
    console.log(err);
  });

app.use(resultsRoutes);
app.use(scoreboardRoutes);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.listen(3000);
