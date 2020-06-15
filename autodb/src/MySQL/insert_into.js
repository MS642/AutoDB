var mysql = require('mysql');

// Create a connection
var con = mysql.createConnection({
  host: "localhost",
  port: "3308",
  user: "root",
  password: "",
  database: "autodb",
});

// Inserting into database
con.connect(function(err) {
    if(err) throw err;
    console.log("Connected To the database:");
 
    var sqlQuery = "INSERT INTO customer (name, email) VALUES ('sam', '12233@123.com')";
    con.query(sqlQuery, function(err, result) {
        if(err) throw err;
        console.log("Data Inserted into autodb...");
    });
});