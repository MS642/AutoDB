var mysql = require('mysql');

//Create A connection
var con = mysql.createConnection({
  host: "localhost",
  port: "3308",
  user: "root",
  password: "",
})

//Connect To MySQL
con.connect(function(err) {
  if(err) throw err;
  console.log("Connected To the database:");
  
  con.query("CREATE DATABASE autodb", function(err, result) {
      if(err) throw err;
      console.log("Database Created!");
  });
})