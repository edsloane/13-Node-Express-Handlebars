const express = require("express");
const path = require("path");

let PORT = process.env.PORT || 3306;

var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/controller");
app.use(routes);

app.listen(PORT, function () {
  console.log("Server listening at localhost:" + PORT);
});
