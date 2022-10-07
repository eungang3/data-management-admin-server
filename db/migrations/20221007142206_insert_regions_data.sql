-- migrate:up
INSERT INTO `regions` (`name`) VALUES ('서울특별시');
INSERT INTO `regions` (`name`) VALUES ('부산광역시');
INSERT INTO `regions` (`name`) VALUES ('인천광역시');
INSERT INTO `regions` (`name`) VALUES ('대구광역시');
INSERT INTO `regions` (`name`) VALUES ('대전광역시');
INSERT INTO `regions` (`name`) VALUES ('광주광역시');
INSERT INTO `regions` (`name`) VALUES ('울산광역시');
INSERT INTO `regions` (`name`) VALUES ('세종특별자치시');
INSERT INTO `regions` (`name`) VALUES ('경기도');
INSERT INTO `regions` (`name`) VALUES ('강원도');
INSERT INTO `regions` (`name`) VALUES ('충청북도');
INSERT INTO `regions` (`name`) VALUES ('충청남도');
INSERT INTO `regions` (`name`) VALUES ('전라북도');
INSERT INTO `regions` (`name`) VALUES ('전라남도');
INSERT INTO `regions` (`name`) VALUES ('경상북도');
INSERT INTO `regions` (`name`) VALUES ('경상남도');
INSERT INTO `regions` (`name`) VALUES ('제주특별자치도');

-- migrate:down
TRUNCATE regions;
