var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Compt@n5",
    database: "employee_trackerDB"
});

connection.connect(err => {
    if (err) throw err;
    
})