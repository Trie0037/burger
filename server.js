//Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.
// Dependencies
// ===========================================================
const express = require("express");
//const path = require('path');
const bodyParser = require('body-parser');
//var connection = require("./config/connection.js");
//var handleBars = require("express-handlebars");
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

var routes = require("./controllers/burgers_controller.js");
app.use(routes);
//require("./controllers/burgers_controller.js")(app);
//require("./app/routing/htmlRoutes.js")(app); //NEEDS TO BE LAST because of the wildcard

// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
