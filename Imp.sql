select * from auctionapp.playerDetails;

desc auctionapp.playerDetails;

use auctionapp;

CREATE TABLE `auctionapp`.`playerDetails` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(100) NULL,
  `lastName` VARCHAR(100) NULL,
  `mobile` BIGINT NULL,
  `area` VARCHAR(100) NULL,
  `city` VARCHAR(100) NULL,
  `gender` VARCHAR(45) NULL,
  `birthYear` INT NULL,
  `age` INT NULL,
  `fielderType` VARCHAR(100) NULL,
  `batsmanType` VARCHAR(100) NULL,
  `bowlerType` VARCHAR(100) NULL,
  PRIMARY KEY (`id`));
  
  INSERT INTO `AuctionApp`.`playerDetails`
(
`firstName`,
`lastName`,
`mobile`,
`area`,
`city`,
`gender`,
`birthYear`,
`age`,
`fielderType`,
`batsmanType`,
`bowlerType`)
VALUES
('Sagar','Shikhare',88982,'Kopar','Navi Mumbai','Male',1991,32,'Batsman','Right Handed','Right Handed');
  


ALTER TABLE auctionapp.playerDetails ADD id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  ADD PRIMARY KEY (id);
  

show databases;

SELECT CURRENT_USER();