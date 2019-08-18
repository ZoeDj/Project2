DROP DATABASE IF EXISTS study_mob;
CREATE DATABASE study_mob;
USE study_mob;

CREATE TABLE meetups
(
	id int NOT NULL AUTO_INCREMENT,
	meetup_topic varchar(255) NOT NULL,
	place_name varchar(255) NOT NULL,
    meetup_time TIME (0),
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
	PRIMARY KEY (id),
    FOREIGN KEY (place_name) REFERENCES places(place_name)
);

CREATE TABLE places
(
	id int NOT NULL AUTO_INCREMENT,
	place_name varchar(255) NOT NULL,
    image_url varchar (255),
    wifi boolean,
    pet_friendly boolean,
    large_groups boolean,
	PRIMARY KEY (place_name)
);

CREATE TABLE reviews
(
	id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	place_name varchar(255) NOT NULL,
    content varchar (255),
    rating int, 
	PRIMARY KEY (id),
	FOREIGN KEY (place_name) REFERENCES places(place_name),
    FOREIGN KEY (author) references users(user_name)
);

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	PRIMARY KEY (user_name),
	FOREIGN KEY (place) REFERENCES places(place),
);
