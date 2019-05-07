const mysql = require('mysql');

// connect to the db
const dbConnectionInfo = {
      host: "localhost",
      port: "3306",
      user: "ashRose",
      password: "ashRose",
      connectionLimit: 5, //mysql connection pool length
      database: "USERMGMNT_V2"
    }

const dbconnection = mysql.createPool(
  dbConnectionInfo
);

// Attempt to catch disconnects
dbconnection.on('connection', (connection) => {
  console.log('MySql DB Connection Established');

  connection.on('error', (err) => {
    console.log(`MySQL error :: ${err && err.code}`);
  });
  connection.on('close', (err) => {
    console.log(`MySQL close :: ${err}`);
  });

});


module.exports = dbconnection;
