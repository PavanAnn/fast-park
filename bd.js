
const http = require('http');
const oracledb = require('oracledb');
let error;
let user;
 //erro: ORA-12154: TNS: could not resolve the connect identifier specified
oracledb.getConnection(
    {
      user: "system", 
      password: "oracle123",
      connectString: 'XE'
    }, 
    function(err, connection) {
      if (err) {error = err; return;}
      
      connection.execute('select user from dual', [], function(err, result) {
        if (err) {error = err; return;}
 
        user = result.rows[0][0];
        error = null;
 
        connection.close(function(err) {
          if (err) {console.log(err);}
        });
      })
    }
);
 
http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
 
  if (error === null) {
    response.end('Connection test succeeded. You connected to Exadata Express as ' + user + '!');
  } else if (error instanceof Error) {
    response.write('Connection test failed. Check the settings and redeploy app!\n');
    response.end(error.message);
  } else {
    response.end('Connection test pending. Refresh after a few seconds...');
  }
}).listen(8081);