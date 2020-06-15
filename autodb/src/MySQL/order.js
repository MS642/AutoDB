var mysql = require('mysql');

//Create A connection
var con = mysql.createConnection({
  host: "localhost",
  port: "3308",
  user: "root",
  password: "",
  database: "autodb",
});


con.connect(function(err) {
    if(err) throw err;
    console.log("Connected To the database:");

    var sqlQuery = "SELECT * FROM customer ORDER BY id DESC";
    con.query(sqlQuery, function(err, result, fields) {
        if(err) throw err;
        console.log(result);
    });
    
});