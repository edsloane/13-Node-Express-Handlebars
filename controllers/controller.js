var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers_table: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create([req.body.burger_name], function (result) {
    res.json({ id: result.id });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = req.params.id;

  burger.update(condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
