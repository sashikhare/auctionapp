
var express = require('express');
const con = require("./dbConnection")

const router = express.Router();

con.connect(function (err) {
  if (err) throw err;
});

console.log('coming')
/* Add Player Details. */
router.post("/", function (req, res, next) {
  const {
    fname,
    lname,
    mob,
    area,
    city,
    gender,
    yob,
    age,
    batsmanType,
    fielderType,
    bowlerType,
  } = req.body;
  const query = `INSERT INTO auctionapp.playerDetails (firstName,lastName,mobile,area,city,gender,birthYear,age,fielderType,batsmanType,bowlerType) VALUES ("${fname}", "${lname}", ${mob}, "${area}","${city}","${gender}",${yob},${age},"${fielderType}","${batsmanType}","${bowlerType}");`;

    con.query(query, function (err, result) {
      if (err) throw err
      console.log('Row has been updated')
      res.redirect('/')
    })

  // con.query(query, function (err, result, fields) {
  //   res.json({
  //     result,
  //     err,
  //   });
  // });
});

module.exports = router;
