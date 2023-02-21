const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const server = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

server.listen(port, hostname, () => {
  console.log(`server running at ${port}`);
});
