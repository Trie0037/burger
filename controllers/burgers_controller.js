var express = require("express");
var router = express.Router();
var burgerControl =require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burgerControl.all(function (data) {
      var hbsObject = {
        burgers: data
      };
      // console.log("hbsObject: " + hbsObject);
      res.render("index", hbsObject);
    });
   });
   
   router.post("/api/burgers", function (req, res) {
    burgerControl.create([
      "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
      ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
   });
   
   router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
   
    console.log("condition", condition);
   
    burgerControl.update({
     devoured: true
    }, condition, function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
   });
   module.exports = router;
























