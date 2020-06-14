// import * from "./server";

var mysql = require('mysql');

//Create A connection
var con = mysql.createConnection({
  host: "localhost",
  port: "3308",
  user: "root",
  password: "",
  database: "autodb",
})

// con.connect(function(err) {
//     if(err) throw err;
//     console.log("Connected To the database:");
    
//   //   con.query("CREATE DATABASE autodb", function(err, result) {
//   //       if(err) throw err;
//   //       console.log("Database Created!");
//   //   });
//       var sqlQuery = "CREATE TABLE customer ( name VARCHAR(255), email VARCHAR(255))";
//       con.query(sqlQuery, function(err, result) {
//           if(err) throw err;
//           console.log("Table has been created...");
//       });
//   });

  con.connect(function(err) {
    if(err) throw err;
    console.log("Connected To the database:");
 
    var sqlQuery = "ALTER TABLE customer ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sqlQuery, function(err, result) {
        if(err) throw err;
        console.log("Altered Table added a column...");
    });
  })