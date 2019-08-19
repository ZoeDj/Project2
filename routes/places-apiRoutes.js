var db = require("../models");

module.exports = function(app) {
  app.get("/api/places", function(req, res) {
    // "get" findAll queries will include an array of all associated Reviews
    db.places.findAll({
      // include: [db.Review]
    }).then(function(dbPlace) {
      res.json(dbPlace);
    });
  });

  app.get("/api/places/:id", function(req, res) {
    // "get" findOne queries will include an array of all associated Reviews
    db.places.findOne({
      where: {
        id: req.params.id
      },
      // include: [db.Review]
    }).then(function(dbPlace) {
      res.json(dbPlace);
    });
  });

  app.post("/api/places", function(req, res) {
    //creates a new Place
    db.places.create(req.body).then(function(dbPlace) {
      res.json(dbPlace);
    });
  });

  // app.delete("/api/places/:id", function(req, res) {
  //   //deletes a place - we may not need this functionality
  //   db.places.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbPlace) {
  //     res.json(dbPlace);
  //   });
  // });
};
