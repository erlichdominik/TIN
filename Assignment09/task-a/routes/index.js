var express = require("express");
var router = express.Router();
// DATA ON THIS REQUEST SHOULD BE TWO NUMBERS AND ONE OP KEY
/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    value: eval(
      `${req.query.firstNumber} ${getOperand(req.query.op)} ${
        req.query.secondNumber
      }`
    ),
  });
  // res.send(
  //   req.query.firstNumber + getOperand(req.query.op) + req.query.secondNumber
  // );
});

const getOperand = (op) => {
  switch (op) {
    case "add":
      return "+";
      break;
    case "subtract":
      return "-";
      break;
    case "divide":
      return "/";
      break;
    case "multiply":
      return "*";
      break;
    default:
      return "unknown";
  }
};

// router.get("/", function (req, res, next) {
//   res.send(req.query.firstNumber + req.query.op + req.query.secondNumber);
// });

module.exports = router;
