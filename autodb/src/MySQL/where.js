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

    var sqlQuery = "SELECT * FROM customer WHERE name LIKE 'M%' AND id > 5";
    con.query(sqlQuery, function(err, result, fields) {
        if(err) throw err;
        console.log(result);
    });

    // OR
    
    var name_search = 'M%';
    var id_search = 5;
    var sqlQuery = "SELECT * FROM customer WHERE name LIKE ? AND id > ?";
    con.query(sqlQuery, [name_search, id_search], function(err, result, fields) {
        if(err) throw err;
        console.log(result);
    });
    
});