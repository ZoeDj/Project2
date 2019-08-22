var db = require("../models");

module.exports = function(app) {
  // Get Route to Select * from reviews table 
  console.log('Running: SERVER SIDE GET REQUEST ROUTE to select * from reviews table')
  app.get("/api/reviews", function(req, res) {
    db.reviews.findAll({}).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

  // Post Route to Create a new Review
  console.log('Running: SERVER SIDE POST REQUEST ROUTE to create a new review in table reviews')
  app.post("/api/reviews", function(req, res) {
    db.reviews.create(req.body).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

  // Delete Route to delete a review by id
  // app.delete("/api/reviews/:id", function(req, res) {
  //   db.reviews.destroy({ where: { id: req.params.id } }).then(function(dbReviews) {
  //     res.json(dbReviews);
  //   });
  // });
};