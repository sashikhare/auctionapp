var mysql = require('mysql2');
var express = require('express');
var router = express.Router();

var con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'May@1991',
  database: 'AuctionApp',
});

con.connect(function(err) {
  if (err) throw err;
});



console.log('coming');

/* GET Player listing. */
router.get('/', function(req, res, next) {
  const query = `
  select * from auctionapp.playersDetails;
    `;
  con.query(query, function(err, result, fields) {
    console.log('res', res)
    res.json({
      result,
      err,
    });
  });
});

module.exports = router;