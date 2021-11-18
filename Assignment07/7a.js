var http = require("http");
var server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  // url.pathname will return us /add or /multiply etc
  const url = new URL(req.url, `http://${req.headers.host}`);
  //console.log("url object", url);
  console.log("searchParams", url.searchParams.get("ada"));

  //switch(url.pathname) {
  ////adding
  //case '/add':

  //}

  res.end("Hello World\n");
});

server.listen(8000, "127.0.0.1");

console.log("Server's running");
