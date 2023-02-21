const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url).pathname;
  if (reqUrl === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (reqUrl === '/students') {
    res.write('This is the list of our students');
    res.end();
  }
});

app.listen(port, hostname, () => {
  console.log(`server running at port ${port}`);
});

module.exports = app;
