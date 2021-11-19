var http = require("http");
var server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  // url.pathname will return us /add or /multiply etc
  const url = new URL(req.url, `http://${req.headers.host}`);
  //console.log("url object", url);

  const firstNumber = url.searchparams.get("firstnumber");
  const secondNumber = url.searchparams.get("secondnumber");
  switch (url.pathname) {
    //adding
    case "/add":
      const result = getResult(firstNumber, secondNumber, "+");
      res.end(result);
      break;
    case "multiply":
  }
});

const getResult = (firstNumber, secondNumber, op) =>
  eval(`${firstNumber} ${op} ${secondNumber}`);

server.listen(8000, "127.0.0.1");

console.log("Server's running");
