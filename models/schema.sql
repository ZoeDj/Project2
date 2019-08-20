DROP DATABASE IF EXISTS study_mob;
CREATE DATABASE study_mob;
USE study_mob;

CREATE TABLE events_tables
(
	id int NOT NULL AUTO_INCREMENT,
	event_topic varchar(255) NOT NULL,
	place_name varchar(255) NOT NULL,
    -- event_date DATE,
    -- event_time TIME (4),
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
	PRIMARY KEY (id)
);

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
    createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

CREATE TABLE reviews
(
	id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	place_name varchar(255) NOT NULL,
    content varchar (255),
    rating int, 
	PRIMARY KEY (id)
);

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
    user_location varchar (255),
	PRIMARY KEY (id)
	
);

INSERT INTO events_tables (event_topic, place_name, member1) VALUES ('Study MVC for Project 2', 'Brix Uptown', 'Bradley');

INSERT INTO places (place_name, image_url, wifi, pet_friendly) VALUES ('Brix Uptown', 'https://brixxpizza.com/', true, false);

INSERT INTO reviews (author, place_name, content, rating) VALUES ('Bradley','Brix Uptown', 'Foodie haven it is not, but great space for studying', 4);

INSERT INTO users (user_name, user_location) VALUES ('Bradley', 'South Charlotte')