var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.send("hello world");
});

module.exports = router;
