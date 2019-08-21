var db = require("../models");
var path = require("path");


module.exports = function (app) {
  // Load index page:  index route loads study_mob_landing_page.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Load event detail page and pass in an event by id
  app.get("/events/:id", function (req, res) {
    db.Event.findOne({ where: { id: req.params.id } }).then(function (dbEvent) {
      res.render("event", {
        event: dbEvent
      });
    });
  });

  // places route loads places.html
  app.get("/places", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/places.html"));
  });

 // Load places detail page and pass in an event by id
 app.get("/places/:id", function (req, res) {
  db.Event.findOne({ where: { id: req.params.id } }).then(function (dbPlace) {
    res.render("place", {
      place: dbPlace
    });
  });
});

 // places route loads places.html
 app.get("/reviews", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/reviews.html"));
});

  // Render landing page for any unmatched routes
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
