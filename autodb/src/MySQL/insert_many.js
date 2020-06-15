var mysql = require('mysql');

//Create a connection
var con = mysql.createConnection({
  host: "localhost",
  port: "3308",
  user: "root",
  password: "",
  database: "autodb",
});

// Inserting many tuples at once
con.connect(function(err) {
    if(err) throw err;
    console.log("Connected To the database:");
 
    var sqlQuery = "INSERT INTO customer (name, email) VALUES ?";
    var manyValues = [
        ['Moh', 'moh@ubc.com'],
        ['Mike', 'mike@ubc.com'],
        ['Man', 'man@ubc.com'],
    ]
    con.query(sqlQuery, [manyValues], function(err, result) {
        if(err) throw err;
        console.log("Records Inserted: " + result.affectedRows);
    });
});