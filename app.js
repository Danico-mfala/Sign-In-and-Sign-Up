// import install libery

var express = require("express");
var bodyParse = require("body-parser");
var mongoose = require("mongoose");
const { log } = require("console");

// create app

const app = express();

app.use(bodyParse.json());
app.use(express.static("public"));
app.use(
  bodyParse.urlencoded({
    extended: true,
  })
);

// connect databse

mongoose.connect("mongodb://0.0.0.0:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;

// check connection
db.on("error", () => console.log("error in connecting database"));
db.once("open", () => console.log("connected to database"));
app
  .get("/", (req, res) => {
    res.set({
      "Allow-access-Allow-Orgin": "*",
    });

    return res.redirect("index.html");
  })
  .listen(3000);

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
