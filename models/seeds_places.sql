-- DROP DATABASE IF EXISTS study_mob;
-- CREATE DATABASE study_mob;
-- USE study_mob;


-- CREATE TABLE places
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	place_name varchar(255) NOT NULL,
--     image_url varchar (255),
--     wifi boolean,
--     pet_friendly boolean,
--     bigtables boolean,
--     neighborhood varchar (255),
--     address_name varchar (255),
--     waiters boolean,
--     kidfriendly boolean,
--     website varchar (255),
--     createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
-- 	   updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
-- 	PRIMARY KEY (id)
-- );

INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Brix Uptown', 'https://brixxpizza.com/', true, false, true, 'center', '28202', true, true, 'https://brixxpizza.com/', NOW(), NOW());
INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Cotton Room at Belfast', 'https://www.cottonroomclt.com/', true, false, true, 'center', '28202', true, true, 'https://www.cottonroomclt.com/', NOW(), NOW());
INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Coco and the Director', 'http://cocoandthedirector.com/', true, false, true, 'center', '28202', true, true, 'https://www.facebook.com/coffeycreekcafe', NOW(), NOW());
INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Coffey Creek Cafe', 'https://www.facebook.com/coffeycreekcafe', true, false, true, 'west', '28217', true, true, 'NA', NOW(), NOW());
INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Queen City Tea Bar', 'http://www.qcteabar.com/', true, false, true, 'west', '28273', true, true, 'http://www.qcteabar.com/', NOW(), NOW());
INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Huntersville Waterbean Coffee', 'https://www.waterbean.coffee/', true, false, true, 'north', '28078', true, true, 'https://www.waterbean.coffee/', NOW(), NOW());
INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Seeds Mugs Coffee', 'https://images.app.goo.gl/64aLsAWdhD3WWawy6', true, false, true, 'south', '28209', true, true, 'http://mugsofcharlotte.com/', NOW(), NOW());
INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Olde Mecklenburg Brewery', 'https://s3-media3.fl.yelpcdn.com/bphoto/kpQ1QP2U85HXHCHDRD2NsA/o.jpg', true, true, true, 'west', '28217', true, true, 'https://www.oldemeckbrew.com/', NOW(), NOW());
INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Whole Foods South CLT', 'https://images.app.goo.gl/jCHLsU4qbyZQE5858', true, false, true, 'south', '28277', false, true, 'https://www.oldemeckbrew.com/', NOW(), NOW());