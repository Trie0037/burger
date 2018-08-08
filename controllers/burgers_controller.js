var express = require("express");
var burgerControl =require("../models/burger.js");
var router = express.Router();
// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burgerControl.all(function (data) {
      var hbsObject = {
        burgerControls: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
   });
   
   router.post("/api/burgerControls", function (req, res) {
    burgerControl.create([
      "name", "sleepy"
    ], [
        req.body.name, req.body.sleepy
      ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
   });
   
   router.put("/api/burgerControls/:id", function (req, res) {
    var condition = "id = " + req.params.id;
   
    console.log("condition", condition);
   
    burgerControl.update({
      sleepy: req.body.sleepy
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
























