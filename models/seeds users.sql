-- DROP DATABASE IF EXISTS study_mob;
-- CREATE DATABASE study_mob;
-- USE study_mob;


-- CREATE TABLE users
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	user_name varchar(255),
--     user_location varchar (255),
--     createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
-- 	updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
-- 	PRIMARY KEY (id)
	
-- );


INSERT INTO users (user_name, user_location, createdAt, updatedAt) VALUES ('Ellen Delaney', 'south', NOW(), NOW());
INSERT INTO users (user_name, user_location,createdAt, updatedAt) VALUES ('Omrie Johnson', 'east', NOW(), NOW());
INSERT INTO users (user_name, user_location,createdAt, updatedAt) VALUES ('Celeste Duprie', 'west', NOW(), NOW());
INSERT INTO users (user_name, user_location,createdAt, updatedAt) VALUES ('Jason B', 'north', NOW(), NOW());
INSERT INTO users (user_name, user_location,createdAt, updatedAt) VALUES ('Sully Washington', 'center', NOW(), NOW());
INSERT INTO users (user_name, user_location,createdAt, updatedAt) VALUES ('Caitlin Steadman', 'center', NOW(), NOW());