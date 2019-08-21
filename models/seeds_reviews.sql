-- DROP DATABASE IF EXISTS study_mob;
-- CREATE DATABASE study_mob;
-- USE study_mob;

-- CREATE TABLE reviews
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	user_name varchar(255) NOT NULL,
-- 	place_name varchar(255) NOT NULL,
--  content varchar (255),
--  rating int, 
-- 	PRIMARY KEY (id)
-- );


INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt) VALUES ('Ellen Delaney','Brix Uptown', 'Foodie haven it is not, but great space for studying', 4, NOW(), NOW());
INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt) VALUES ('Omrie Johnson','Coco and the Director', 'You will have a hard time believing you have not been whisked away to Paris!', 5, NOW(), NOW());
INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt) VALUES ('Jason B','Brix Uptown', 'Delicious pastry and a fabulous latte', 4, NOW(), NOW());
INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt) VALUES ('Celeste Duprie','Huntersville Waterbean Coffee', ' Good for large groups.  There was a large party seated downstairs, and our party of 3 was seated upstairs.', 3, NOW(), NOW());
INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt) VALUES ('Sully Washington','Whole Foods South CLT', '“The wine/beer bar (on second floor) & "Queens Corner" wine/lounge area above is so nice.', 4, NOW(), NOW());
INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt) VALUES ('Caitlin Steadman','Queen City Tea Bar', 'They have an extensive selection of teas and drinks that can appeal to most if not all palates. I’m a big fan of oolong tea so when I saw that there is a roasted oolong milk tea, I was sold for life! This place is a breath of fresh air for Charlotte’s fledgling milk tea scene and is seated right in front of Top Golf, Arysley, the Premium Outlets, and I-485! Awesome!', 4, NOW(), NOW());