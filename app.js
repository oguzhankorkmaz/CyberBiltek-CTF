const path = require("path");
const express = require("express");
var exphbs = require("express-handlebars");
const app = express();
const port = process.env.PORT || 4448;
const hostname = "127.0.0.1";

app.use(express.static("assets"));

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");


app.get("/", function (req, res) {
  res.render("site/homepage", {
    layout: "indexLayout",
    title: (headerTitle = () => "AnaSayfa"),
    class: (linkClass = () => "homepage"),
    cssName: (cssName1 = () => "index"),
  });
});

app.get("/cyberbiltek", function (req, res) {
  res.render("site/cyberbiltek", {
    layout: "indexLayout",
    title: (headerTitle = () => "BTG Nedir?"),
    class: (linkClass = () => "cyberbiltek"),
    cssName: (cssName1 = () => "cyberbiltek"),
  });
});

app.get("/history", function (req, res) {
  res.render("site/history", {
    layout: "indexLayout",
    title: (headerTitle = () => "History"),
    class: (linkClass = () => "history"),
    cssName: (cssName1 = () => "history"),
  });
});

app.get("/ctf", function (req, res) {
  res.render("site/ctf", {
    layout: "indexLayout",
    title: (headerTitle = () => "CTF"),
    class: (linkClass = () => "ctf"),
    cssName: (cssName1 = () => "ctf"),
  });
});

app.get("/calender", function (req, res) {
  res.render("site/calender", {
    layout: "indexLayout",
    title: (headerTitle = () => "Calender"),
    class: (linkClass = () => "calender"),
    cssName: (cssName1 = () => "calender"),
  });
});

app.get("/sponsor", function (req, res) {
  res.render("site/sponsor", {
    layout: "indexLayout",
    title: (headerTitle = () => "Sponsor"),
    class: (linkClass = () => "sponsor"),
    cssName: (cssName1 = () => "sponsor"),
  });
});

app.get("/register", function (req, res) {
  res.render("site/register", {
    layout: "indexLayout",
    title: (headerTitle = () => "Register"),
    class: (linkClass = () => "register"),
    cssName: (cssName1 = () => "register"),
  });
});

app.listen(port, () => {
  console.log(`ServerÇalışıyor http://${hostname}:${port}`);
});
