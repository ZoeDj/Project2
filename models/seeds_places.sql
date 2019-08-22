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
-- 	updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
-- 	PRIMARY KEY (id)
-- );


INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Brix Uptown', 'https://datenightfriday.files.wordpress.com/2015/10/img_34811.jpg', true, false, true, 'center', '28202', true, true, 'https://brixxpizza.com/', NOW(), NOW());

INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Cotton Room at Belfast', 'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2016/04/cotton-room-lounge-seating.jpg', true, false, true, 'center', '28202', true, true, 'https://www.cottonroomclt.com/', NOW(), NOW());

INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Coco and the Director', 'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2016/08/staircase-at-coco-and-the-director.jpg', true, false, true, 'center', '28202', true, true, 'https://www.facebook.com/coffeycreekcafe', NOW(), NOW());

INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Coffey Creek Cafe', 'https://fastly.4sqi.net/img/general/600x600/85445045_eE4jX5FWK6GEfD-t57UzRQ-Roa61xqPAKYAa_uTLhRs.jpg', true, false, true, 'west', '28217', true, true, 'NA', NOW(), NOW());

INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Queen City Tea Bar', 'https://10619-2.s.cdn12.com/rests/small/w320/h220/110_503631612.jpg', true, false, true, 'west', '28273', true, true, 'http://www.qcteabar.com/', NOW(), NOW());

INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Huntersville Waterbean Coffee', 'https://s3-media4.fl.yelpcdn.com/bphoto/bjSHNEYmJ3HnFfgvZu-jSg/ls.jpg', true, false, true, 'north', '28078', true, true, 'https://www.waterbean.coffee/', NOW(), NOW());

INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Mugs Coffee', 'https://media-cdn.tripadvisor.com/media/photo-s/07/84/23/29/charlotte-geeks-board.jpg', true, false, true, 'south', '28209', true, true, 'http://mugsofcharlotte.com/', NOW(), NOW());

INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Olde Mecklenburg Brewery', 'https://s3-media3.fl.yelpcdn.com/bphoto/kpQ1QP2U85HXHCHDRD2NsA/o.jpg', true, true, true, 'west', '28217', true, true, 'https://www.oldemeckbrew.com/', NOW(), NOW());

INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Whole Foods South CLT', 'https://s3-media2.fl.yelpcdn.com/bphoto/PQPCoLzOnep0a_FW8ABiUQ/ls.jpg', true, false, true, 'south', '28277', false, true, 'https://www.oldemeckbrew.com/', NOW(), NOW());

INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('8.2.0 Pizzeria & Bar', 'https://eventective-media.azureedge.net/1970465_lg.jpg', true, false, true, 'south', '28206', false, true, 'https://820clt.com/', NOW(), NOW());

INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Charlotte Meck. Library Plaza-Midwood', 'https://s3-media2.fl.yelpcdn.com/bphoto/hbvwn6Et_41J3bp53t3yLg/ls.jpg', true, false, true, 'south', '28205', false, true, 'https://www.cmlibrary.org/branch/plaza-midwood', NOW(), NOW());

INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Julias Cafe & Bookstore', 'https://d1dbd4ex4tu372.cloudfront.net/uploads/image/picture/24301/large_11351951_1603137029968119_911939976_n.jpg', true, false, true, 'south', '28211', false, true, 'https://www.juliascafe.org/', NOW(), NOW());

INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Queen City Grounds', 'http://manage.cluckdesign.com/public/content/work/Cluck_QueenCityGrounds.jpg', true, false, true, 'south', '28202', false, true, 'https://queencitygrounds.com/', NOW(), NOW());

INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Amelies', 'https://ameliesfrenchbakery.com/wp-content/uploads/2019/06/Noda-Interior-2019.png', true, false, true, 'south', '28205', false, true, 'http://https://ameliesfrenchbakery.com/', NOW(), NOW());

INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Amelies', 'https://ameliesfrenchbakery.com/wp-content/uploads/2019/04/uptown-1-1024x683.jpg', true, false, true, 'south', '28202', false, true, 'http://https://ameliesfrenchbakery.com/', NOW(), NOW());

INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Amelies', 'https://ameliesfrenchbakery.com/wp-content/uploads/2019/04/park-1024x733.jpg', true, false, true, 'south', '28209', false, true, 'http://https://ameliesfrenchbakery.com/', NOW(), NOW());

INSERT INTO places (place_name, image_url, wifi, pet_friendly, bigtables, neighborhood, address_name, waiters, kidfriendly, website, createdAt, updatedAt) VALUES ('Amelies', 'https://ameliesfrenchbakery.com/wp-content/uploads/2019/04/Carmel-USE-1024x683.jpg', true, false, true, 'south', '28226', false, true, 'http://https://ameliesfrenchbakery.com/', NOW(), NOW());
