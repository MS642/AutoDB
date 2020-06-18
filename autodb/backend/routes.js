
const express = require('express');
// const bodyParser = require('body-parser');
const mysql = require('mysql');
var bodyParser = require('body-parser');
var connection = mysql.createPool({
    host: "localhost",
    port: "3308",
    user: "root",
    password: "",
    database: "autodb",
  });
  
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

app.get('/db/company', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM insurance_company', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

app.get('/db/vehicle', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM customer_owns_vehicle', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

app.get('/db/customer_company', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM company_has_customer', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

app.get('/db/employee', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM employees', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

app.get('/db/accidents', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM vehicle_involved_in_accident', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

app.get('/db/groupby', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    var sqlQuery = "SELECT hospital_name, COUNT(hospital_name) as Count FROM hospitalized\
    WHERE hospital_name LIKE '%General%'\
    GROUP BY hospital_name";   // Executing the MySQL query (select all data from the 'users' table).
  connection.query(sqlQuery, function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});

app.get('/db/aggregate', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    var sqlQuery = "SELECT AVG(Salary) as AVG FROM jobs WHERE Company_ID = 1";
  // Executing the MySQL query (select all data from the 'users' table).
  connection.query(sqlQuery, function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.get('/db/join', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    var sqlQuery = "SELECT customer.Customer_ID, customer.Name, customer_owns_vehicle.Vehicle_VIN, customer_owns_vehicle.Model, customer_owns_vehicle.color, customer_owns_vehicle.year\
    FROM customer\
    INNER JOIN customer_owns_vehicle ON customer.Customer_ID = customer_owns_vehicle.Customer_ID";
  // Executing the MySQL query (select all data from the 'users' table).
  connection.query(sqlQuery, function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // s
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/db/insert/customer/:name/:address', (req, res) => {
  console.log(req.params.name);
  console.log(req.params.address);
  connection.query('INSERT INTO customer ( Name, Billing_Address) VALUES ( ?, ?)', [ req.params.name, req.params.address], (error, results, fields) => {
    if (error) console.warn("failed to insert" + error);
    res.end(JSON.stringify(results));
  });
});

app.get('/db/delete/customer/:id', (req, res) => {
  connection.query('DELETE FROM customer WHERE Customer_ID = ?', [ parseInt(req.params.id, 10)], (error, results, fields) => {
    if (error) console.warn("failed to delete" + error);
    res.end(JSON.stringify(results));
  });
});

app.get('/db/update/customer/:name/:address/:id', (req, res) => {
  console.log(req.params.name);
  console.log(req.params.address);
  connection.query('UPDATE customer  SET Name = ?, Billing_Address = ? WHERE Customer_ID = ?', [ req.params.name, req.params.address, parseInt(req.params.id, 10)], (error, results, fields) => {
    if (error) console.warn("failed to update" + error);
    res.end(JSON.stringify(results));
  });
});

app.get('/db/selection/customer/:select/:from/:where', function (req, res) {
  // Connecting to the database.
  var query = 'Select ' + req.params.select + " FROM " + req.params.from + " WHERE " + req.params.where;
  console.log(query);
  console.log("herer");
  connection.getConnection(function (err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query(query, function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      console.log(results);
      res.send(results)
    });
  });
});

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'URLs to trust of allow');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if ('OPTIONS' == req.method) {
  res.sendStatus(200);
  } else {
    next();
  }
});
// Starting our server.
app.listen(5000, () => {
 console.log('Go to http://localhost:5000/db/customer so you can see the data.');
});
