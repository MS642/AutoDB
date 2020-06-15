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
 
    var sqlQuery = "SELECT * FROM customer";
    con.query(sqlQuery, function(err, result, fields) {
        if(err) throw err;
        // console.log(result);
        // console.log(result[0]);
        // console.log(result[0].name);
        for(var i = 0; i< result.length; i++) {
            console.log(result[i].name);
        }
    });
});