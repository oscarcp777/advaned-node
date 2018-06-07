const fs = require('fs');
const server = require('http').createServer();
const data = {
  'message': 'Chuck Norris can write multi-threaded applications with a single thread.'
};

server.on('request', (req, res) => {
  switch (req.url) {
  case '/api':
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
    break;
  case '/home':
  case '/about':
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(`.${req.url}.html`));
    break;
  case '/':
    res.writeHead(301, { 'Location': '/home' });
    res.end();
    break;
  default:
    res.writeHead(404);
    res.end();
  }
});
server.listen(8000, () => {
  console.log('Server running at http://localhost:8000/');
});
