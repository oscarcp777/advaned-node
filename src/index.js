const http = require('http');
//closure, FCC
let counter = 0;
const makeServer = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello  Keca Galindo  NRo: ${counter++}`);
};
const server = http.createServer(makeServer);

server.listen(8000, () => {
  console.log('Server running at http://localhost:8000/');
});