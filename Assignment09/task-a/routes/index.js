var express = require("express");
var router = express.Router();
// DATA ON THIS REQUEST SHOULD BE TWO NUMBERS AND ONE OP KEY
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", (req, res, next) => {
  let data = req.body;
  console.log("DATA");
  console.log(req.body.firstNumber);
  console.log(req.body.op);
  console.log(req.body.secondNumber);
  // res.json(
  //   JSON.stringify({
  //     FirstNumber: req.body.firstNumber,
  //     SecondNumber: req.body.secondNumber,
  //     op: req.body.op,
  //     Value: eval(
  //       `${req.body.firstNumber} ${req.body.op} ${req.body.secondNumber}`
  //     ),
  //   })
  // );
  res.json({
    FirstNumer: req.body.firstNumber,
    SecondNumber: req.body.secondNumber,
    Op: req.body.op,
    Value: eval(
      `${req.body.firstNumber} ${req.body.op} ${req.body.secondNumber}`
    ),
  });
});

const validateDate = (data) => {
  // check validation for every field
  // numbers should be numbers and op sign is one of the OPEnum
};

// workarounds for enum becuase im guessing we are not allow to use typecript yet :<
const OPEnum = Object.freeze(
  { ADD: "+" },
  { SUBTRACT: "-" },
  { MULTIPLY: "*" },
  { DIDIVE: "/" }
);

module.exports = router;
