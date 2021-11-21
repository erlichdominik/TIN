const express = require("express");
var router = express.Router();

router.post("/", (req, res, next) => {
  console.log(req.body);
  //   res.send(`data: ${req.body}`);
  res.render("jsondata", {
    first: req.body.firstName,
    second: req.body.lastName,
    third: req.body.sNumber,
  });
  //   res.render("form");
  //TODO: render template do display json data
});

module.exports = router;
