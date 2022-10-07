-- migrate:up
INSERT INTO `users` (`name`,`account`,`password`,`phone_number`, `role`) VALUES ('김고양','goyang12','$2b$12$j3Jwxxuak.4GGzFCm7FaT.gNCKd1ZOkbfH6S8TREd7o3uJ5BWpfh2','02-234-5432','대표');
INSERT INTO `users` (`name`,`account`,`password`,`phone_number`, `region_id`, `role`) VALUES ('이바둑','badook43','$2b$12$ofw/EtzWhwh0QP97vzWn7uoh9uSeFfuM/nooWOockzzhm/9j.Fdrq','010-4312-4123',1,'지역');

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE users;
SET FOREIGN_KEY_CHECKS = 1;
