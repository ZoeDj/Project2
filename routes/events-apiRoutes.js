var db = require("../models");

module.exports = function(app) {
  // Get Route to Select * from events table 
  console.log('Running: SERVER SIDE GET REQUEST ROUTE to select * from events table')
  app.get("/api/events", function(req, res) {
    db.Events.findAll({}).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  // Get Route to Select 1 events by id and join review data for the event/place
  // app.get("/api/events/:id", function(req, res) {
  //   console.log('SERVER SIDE GET REQUEST routed to Select 1 by id from events table and outer join reviews for that event/place')
  //   db.Events.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Review]
  //   }).then(function(dbEvents) {
  //     res.json(dbEvents);
  //   });
  // });


  // Post Route to Create a new Events
  console.log('Running: SERVER SIDE POST REQUEST ROUTE to create a new events in table events')
  app.post("/api/events", function(req, res) {
    db.Events.create(req.body).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  // Delete Route to delete an events by id
  app.delete("/api/events/:id", function(req, res) {
    db.Events.destroy({ where: { id: req.params.id } }).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });
};
