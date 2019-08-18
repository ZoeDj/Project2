var db = require("../models");

module.exports = function(app) {
  // Get Route to Select * from places table 
  console.log('Running: SERVER SIDE GET REQUEST ROUTE to select * from places table')
  app.get("/api/places", function(req, res) {
    db.Places.findAll({}).then(function(dbPlaces) {
      res.json(dbPlaces);
    });
  });

  // Get Route to Select 1 places by id and join review data for the place
  // app.get("/api/places/:id", function(req, res) {
  //   console.log('SERVER SIDE GET REQUEST routed to Select 1 by id from places table and outer join reviews for that place')
  //   db.Places.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Review]
  //   }).then(function(dbPlaces) {
  //     res.json(dbPlaces);
  //   });
  // });


  // Post Route to Create a new Places
  console.log('Running: SERVER SIDE POST REQUEST ROUTE to create a new place in table places')
  app.post("/api/places", function(req, res) {
    db.Places.create(req.body).then(function(dbPlaces) {
      res.json(dbPlaces);
    });
  });

  // Delete Route to delete an places by id
  app.delete("/api/places/:id", function(req, res) {
    db.Places.destroy({ where: { id: req.params.id } }).then(function(dbPlaces) {
      res.json(dbPlaces);
    });
  });
};
