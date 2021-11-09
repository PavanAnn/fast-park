const app = require('./app');
const http = require('http');
const port = 3000;

app.set('port', port);

// error handler
function onError(error) {
  console.log(error);
}

// server
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
console.log(`API is alive on ${port}!`);