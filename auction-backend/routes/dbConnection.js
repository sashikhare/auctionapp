var mysql = require('mysql2');

const config = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'May@1991',
    database: 'auctionapp',
  });

module.exports = config