var http = require("http");
var server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  // url.pathname will return us /add or /multiply etc
  const url = new URL(req.url, `http://${req.headers.host}`);
  //console.log("url object", url);
  let result = "unsuported operation";
  switch (url.pathname) {
    //adding
    case "/add":
      result = getParams(url, "+");
      break;
    case "/multiply":
      result = getParams(url, "*");
      break;
    case "/subtract":
      result = getParams(url, "-");
      break;
    case "/divide":
      result = getParams(url, "/");
      break;
    default:
      break;
  }

  res.end(result);
});
//TODO add validation

const validateParams = (url, paramName) => {
  let paramData = "";
  try {
    paramData = url.searchParams.get(paramName);
  } catch (err) {
    paramData = "error";
  }
  return paramData;
};

const getParams = (url, op) => {
  const firstNumber = validateParams(url, "firstnumber");
  const secondNumber = validateParams(url, "secondnumber");
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return "wrong params";
  }
  const result = getResult(firstNumber, secondNumber, op);
  return `firstParam: ${firstNumber}, secondParam: ${secondNumber}, result: ${result}`;
};

const getResult = (firstNumber, secondNumber, op) =>
  eval(`${firstNumber} ${op} ${secondNumber}`);

server.listen(8000, "127.0.0.1");

console.log("Server's running");
