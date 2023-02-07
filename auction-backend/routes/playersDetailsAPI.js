var express = require('express');
const con = require("./dbConnection")

const router = express.Router();

con.connect(function(err) {
  if (err) throw err;
});

/* GET Player listing. */
router.get('/', function(req, res, next) {
  const query = `
  select * from auctionapp.playerDetails;
    `;
  con.query(query, function(err, result, fields) {
    res.json({
      result,
      err,
    });
  });
});

module.exports = router;