// Dependencies
// ===========================================================
const express = require("express");
//const path = require('path');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const app = express();
// Sets up the Express app to handle data parsing
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//express.static Used to serve images, css files, and javascript files
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//Routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);
// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

var https = require("https");
setInterval(function() {
  https.get("https://eatdaburger187.herokuapp.com/");
}, 300000); // ping app every 5 minutes (300000)
