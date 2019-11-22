const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  res.setHeader('Content-Type', 'application/json');

  if (url === '/donors') {
    res.statusCode = 200;
    res.end("{ \"message\": \"No donors found\" }");
  } else if (url === '/donations') {
    res.statusCode = 200;
    res.end("{ \"message\": \"No donations found\" }");
  } else {
    res.statusCode = 404;
    res.end("{ \"message\": \"You are lost\" }");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});