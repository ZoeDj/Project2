-- DROP DATABASE IF EXISTS study_mob;
-- CREATE DATABASE study_mob;
-- USE study_mob;

-- CREATE TABLE reviews
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	user_name varchar(255) NOT NULL,
-- 	place_name varchar(255) NOT NULL,
-- 	content varchar (255),
-- 	rating int, 
--     createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
-- 	updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--     placeId int NOT NULL DEFAULT 1, 
-- 	PRIMARY KEY (id)
-- );

INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt, placeId) VALUES ('Ellen Delaney','Brix Uptown', 'Foodie haven it is not, but great space for studying', 4, NOW(), NOW(),1);
INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt, placeId) VALUES ('Omrie Johnson','Coco and the Director', 'You will have a hard time believing you have not been whisked away to Paris!', 5, NOW(), NOW(),3);
INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt, placeId) VALUES ('Jason B','Mugs Coffee', 'Mugs is one of my favorite study spots in Charlotte. Cozy atmosphere with plenty of tables to get work done.  Plenty of parking in the front.', 4, NOW(), NOW(),7);
INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt, placeId) VALUES ('Celeste Duprie','Huntersville Waterbean Coffee', ' Good for large groups.  There was a large party seated downstairs, and our party of 3 was seated upstairs.', 3, NOW(), NOW(),6);
INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt, placeId) VALUES ('Sully Washington','Whole Foods South CLT', 'Pros: big community tables, coffee/pizza/store on the bottom floor, bathrooms on the same level, outdoor patio, closed room that you can reserve.', 4, NOW(), NOW(),9);
INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt, placeId) VALUES ('Nick Held','The Olde Mecklenburg Brewery', 'A huge outdoor seating area is a perfect meeting spot on a nice fall or spring day. We come to study there for hours and enjoy some beer and quick bits afterwards.', 4, NOW(), NOW(),8);


