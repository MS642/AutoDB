const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

var connection = mysql.createPool({
    host: "localhost",
    port: "3308",
    user: "root",
    password: "",
    database: "autodb",
  });


// Starting our app.

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With Content-Type, Accept");
    next();
    });
// Creating a GET route that returns data from the 'users' table.
app.get('/db/customer', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM customer', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

// Starting our server.
app.listen(5000, () => {
 console.log('Go to http://localhost:5000/db/customer so you can see the data.');
});