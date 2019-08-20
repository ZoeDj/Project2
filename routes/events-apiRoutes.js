var db = require("../models");


module.exports = function (app) {
  // Get Route to Select * from events table 
  console.log('Running: SERVER SIDE GET REQUEST ROUTE to select * from events table')
  app.get("/api/events", function (req, res) {
    db.events_tables.findAll(
    ).then(function (dbEvents) {
      console.log(dbEvents)
      res.json(dbEvents);
    });
  });

}