DROP DATABASE IF EXISTS study_mob;
CREATE DATABASE study_mob;
USE study_mob;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255),
    user_location varchar (255),
    createdAt datetime NOT NULL,
	updatedAt datetime NOT NULL,
	PRIMARY KEY (id)
	
);

INSERT INTO users (user_name, user_location, createdAt, updatedAt) VALUES ('Ellen Delaney', 'south', NOW(), NOW());
INSERT INTO users (user_name, user_location,createdAt, updatedAt) VALUES ('Omrie Johnson', 'east', NOW(), NOW());
INSERT INTO users (user_name, user_location,createdAt, updatedAt) VALUES ('Celeste Duprie', 'west', NOW(), NOW());
INSERT INTO users (user_name, user_location,createdAt, updatedAt) VALUES ('Jason B', 'north', NOW(), NOW());
INSERT INTO users (user_name, user_location,createdAt, updatedAt) VALUES ('Sully Washington', 'center', NOW(), NOW());
INSERT INTO users (user_name, user_location,createdAt, updatedAt) VALUES ('Caitlin Steadman', 'center', NOW(), NOW());

CREATE TABLE events_tables
(
	id int NOT NULL AUTO_INCREMENT,
	event_topic varchar(255) NOT NULL,
	place_name varchar(255) NOT NULL,
    event_date varchar(255),
    event_time varchar (255),
    member1 varchar(255),
	member2 varchar(255),
	member3 varchar(255),
    member4 varchar(255),
	member5 varchar(255),
	member6 varchar(255),
    member7 varchar(255),
	member8 varchar(255),
	member9 varchar(255),
    member10 varchar(255),
    createdAt datetime NOT NULL,
	updatedAt datetime NOT NULL,
	PRIMARY KEY (id)
);


INSERT INTO events_tables (event_topic, place_name, event_date, event_time, member1, member2, member3, member4, member5, member6, member7, member8, member9, member10,createdAt, updatedAt) VALUES ('Anthropology', 'Olde Mecklenburg Brewery', 'TBD', 'TBD', 'Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up',NOW(), NOW());
INSERT INTO events_tables (event_topic, place_name, event_date, event_time, member1, member2, member3, member4, member5, member6, member7, member8, member9, member10,createdAt, updatedAt) VALUES ('Java Script', 'Whole Foods South CLT', 'TBD', 'TBD', 'Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up',NOW(), NOW());
INSERT INTO events_tables (event_topic, place_name, event_date, event_time, member1, member2, member3, member4, member5, member6, member7, member8, member9, member10,createdAt, updatedAt) VALUES ('Comparative Human Development', 'Brix Uptown', 'TBD', 'TBD', 'Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up',NOW(), NOW());
INSERT INTO events_tables (event_topic, place_name, event_date, event_time, member1, member2, member3, member4, member5, member6, member7, member8, member9, member10,createdAt, updatedAt) VALUES ('Cinema and Media Studies', 'Cotton Room at Belfast', 'TBD', 'TBD', 'Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up',NOW(), NOW());
INSERT INTO events_tables (event_topic, place_name, event_date, event_time, member1, member2, member3, member4, member5, member6, member7, member8, member9, member10,createdAt, updatedAt) VALUES ('Algorithms and AI Programming', 'Coffey Creek Cafe', 'TBD', 'TBD', 'Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up',NOW(), NOW());
INSERT INTO events_tables (event_topic, place_name, event_date, event_time, member1, member2, member3, member4, member5, member6, member7, member8, member9, member10,createdAt, updatedAt) VALUES ('Biological Sciences','Coco and the Director', 'TBD', 'TBD', 'Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up',NOW(), NOW());
INSERT INTO events_tables (event_topic, place_name, event_date, event_time, member1, member2, member3, member4, member5, member6, member7, member8, member9, member10,createdAt, updatedAt) VALUES ('Human Rights', 'Cotton Room at Belfast', 'TBD', 'TBD', 'Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up',NOW(), NOW());
INSERT INTO events_tables (event_topic, place_name, event_date, event_time, member1, member2, member3, member4, member5, member6, member7, member8, member9, member10,createdAt, updatedAt) VALUES ('Architectural studies', 'Huntersville Waterbean Coffee', 'TBD', 'TBD', 'Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up','Open-Sign-Up',NOW(), NOW());


CREATE TABLE places
(
	id int NOT NULL AUTO_INCREMENT,
	place_name varchar(255) NOT NULL,
    image_url varchar (255),
    wifi boolean,
    pet_friendly boolean,
    bigtables boolean,
    neighborhood varchar (255),
    address_name varchar (255),
    waiters boolean,
    kidfriendly boolean,
    website varchar (255),
    createdAt datetime NOT NULL,
	updatedAt datetime NOT NULL,
	PRIMARY KEY (id)
);


INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Brix Uptown', 'https://brixxpizza.com/', true, false, true, 'center', '28202', true, true, 'https://brixxpizza.com/', NOW(), NOW());
INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Cotton Room at Belfast', 'https://www.cottonroomclt.com/', true, false, true, 'center', '28202', true, true, 'https://www.cottonroomclt.com/', NOW(), NOW());
INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Coco and the Director', 'http://cocoandthedirector.com/', true, false, true, 'center', '28202', true, true, 'https://www.facebook.com/coffeycreekcafe', NOW(), NOW());
INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Coffey Creek Cafe', 'https://www.facebook.com/coffeycreekcafe', true, false, true, 'west', '28217', true, true, 'NA', NOW(), NOW());
INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Queen City Tea Bar', 'http://www.qcteabar.com/', true, false, true, 'west', '28273', true, true, 'http://www.qcteabar.com/', NOW(), NOW());
INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Huntersville Waterbean Coffee', 'https://www.waterbean.coffee/', true, false, true, 'north', '28078', true, true, 'https://www.waterbean.coffee/', NOW(), NOW());
INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Mugs Coffee', 'https://images.app.goo.gl/64aLsAWdhD3WWawy6', true, false, true, 'south', '28209', true, true, 'http://mugsofcharlotte.com/', NOW(), NOW());
INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Olde Mecklenburg Brewery', 'https://s3-media3.fl.yelpcdn.com/bphoto/kpQ1QP2U85HXHCHDRD2NsA/o.jpg', true, true, true, 'west', '28217', true, true, 'https://www.oldemeckbrew.com/', NOW(), NOW());
INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Whole Foods South CLT', 'https://images.app.goo.gl/jCHLsU4qbyZQE5858', true, false, true, 'south', '28277', false, true, 'https://www.oldemeckbrew.com/', NOW(), NOW());

CREATE TABLE reviews
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	place_name varchar(255) NOT NULL,
	content varchar (255),
	rating int, 
    createdAt datetime NOT NULL,
	updatedAt datetime NOT NULL,
    placeId int NOT NULL DEFAULT 1, 
	PRIMARY KEY (id)
);


INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt, placeId) VALUES ('Ellen Delaney','Brix Uptown', 'Foodie haven it is not, but great space for studying', 4, NOW(), NOW(),1);
INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt, placeId) VALUES ('Omrie Johnson','Coco and the Director', 'You will have a hard time believing you have not been whisked away to Paris!', 5, NOW(), NOW(),3);
INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt, placeId) VALUES ('Jason B','Seeds Mugs Coffee', 'Delicious pastry and a fabulous latte', 4, NOW(), NOW(),7);
INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt, placeId) VALUES ('Celeste Duprie','Huntersville Waterbean Coffee', ' Good for large groups.  There was a large party seated downstairs, and our party of 3 was seated upstairs.', 3, NOW(), NOW(),6);
INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt, placeId) VALUES ('Sully Washington','Whole Foods South CLT', '“The wine/beer bar (on second floor) & wine/lounge area above is so nice.', 4, NOW(), NOW(),9);
INSERT INTO reviews (user_name, place_name, content, rating,createdAt, updatedAt, placeId) VALUES ('Caitlin Steadman','Queen City Tea Bar', 'They have an extensive selection of teas and drinks that can appeal to most if not all palates. I’m a big fan of oolong tea so when I saw that there is a roasted oolong milk tea, I was sold for life!', 4, NOW(), NOW(),5);

