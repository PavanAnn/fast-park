const express = require('express');
const oracledb = require('oracledb');
var password = 'oracle123';

//Conexao com oracleDB
/*oracledb.getConnection({
    user: "system",
    password: password,
    connectString: "localhost:1521/xe"
  });

console.log('connected to database');*/

// App
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Load routes
const indexRoutes = require('../routes/operators');
app.use('/', indexRoutes);

module.exports = app;