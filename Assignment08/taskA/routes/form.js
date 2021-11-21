const express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.render("form");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.render("formdata", {
    fname: req.body.fname,
    lname: req.body.sname,
    snumber: req.body.snumber,
  });
});

module.exports = router;
