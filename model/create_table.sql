CREATE TABLE `spoilers` (
  `title` varchar(255) NOT NULL,
  `body` text,
  `factual` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;