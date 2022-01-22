var express = require("express");
var router = express.Router();
// DATA ON THIS REQUEST SHOULD BE TWO NUMBERS AND ONE OP KEY
/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

router.get("/", (req, res, next) => {
  res.json({
    value: eval(
      `${req.body.firstNumber} ${req.body.op} ${req.body.secondNumber}`
    ),
  });
});

// router.post("/", (req, res, next) => {
//   res.json({
//     FirstNumer: req.body.firstNumber,
//     SecondNumber: req.body.secondNumber,
//     Op: req.body.op,
//     Value: eval(
//       `${req.body.firstNumber} ${req.body.op} ${req.body.secondNumber}`
//     ),
//   });
// });

module.exports = router;
