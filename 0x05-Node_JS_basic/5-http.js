const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  const req_url = url.parse(req.url).pathname
  if (req_url == '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (req_url == '/students') {
    res.write('This is the list of our students')
    res.end()
  }
});

app.listen(port, hostname, () => {
  console.log(`server running at port ${port}`);
});

module.exports = app;
