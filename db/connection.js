const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'Atlas-2021',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;