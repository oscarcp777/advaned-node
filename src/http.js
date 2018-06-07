const server = require('http').createServer();

server.on('request', (req, res) => {
  console.log('start request');
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.write('Hello  Alan Brito Delgado  \n');

  setTimeout(function () {
    res.write('Hello Elsa Capunta  \n');
  }, 5000);

  setTimeout(function () {
    res.write('Hello  Mary Conazo\n');
    res.end('Bye :|)');
  }, 8000);
  console.log('end request');  
});

server.listen(8000, () => {
  console.log('Server running at http://localhost:8000/');
});