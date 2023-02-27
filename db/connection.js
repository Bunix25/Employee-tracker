const mysql = require('mysql2');

// Connect 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '25252525Lo',
    database: 'employee_tracker'
});

module.exports = db;
