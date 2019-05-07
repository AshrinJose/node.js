const dbconnection = require('../db/dbConnectionPool');

const getData = (transactionId, query, data) => {
  return new Promise((resolve, reject) => {
    try {
      dbconnection.getConnection((err, connection) => {
        if (err) {
          console.log('Error While Getting Connection');
          return reject(err);
        }
        connection.query(query, data, (err, results) => {
          connection.release();
          if (!err) {
            return resolve(results);
          }
          return reject(err);
        });
      });
    } catch (error) {
      console.log('Error While Connecting to DB');
      return reject(error);
    }
  });
}

module.exports = { getData };
