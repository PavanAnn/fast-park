const app = require('./app')();
const port = app.get('port');
const cors = require('cors')


app.use(cors()) //habilitando cors na nossa aplicacao

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});

// error handler
function onError(error) {
  console.log(error);
}

// server
//const server = http.createServer(app);
//server.listen(port);
//server.on('error', onError);