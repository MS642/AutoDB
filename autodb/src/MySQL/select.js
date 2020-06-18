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
 
    var sqlQuery = "SELECT c.Customer_ID FROM customer c\
    WHERE NOT EXISTS (SELECT v.Vehicle_VIN\
    FROM customer_owns_vehicle v\
    WHERE NOT EXISTS (SELECT e.Vehicle_VIN\
    FROM vehicle_insured_with_plan_id e\
    WHERE v.Vehicle_VIN = e.Vehicle_VIN AND c.Customer_ID = v.Customer_ID))";  
    // var sqlQuery = "SELECT hospital_name, COUNT(*)  FROM hospitalized\
    // GROUP BY hospital_name";

    
    con.query(sqlQuery, function(err, result, fields) {
        if(err) throw err;
        console.log(result);
        // // console.log(result[0]);
        // // console.log(result[0].name);
        // for(var i = 0; i< result.length; i++) {
        //     console.log(result[i].name);
        // }
    });
});