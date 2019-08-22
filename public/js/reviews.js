$(document).ready(function() {  
  
  // Adding event listeners to the form to create a review object
  $("#submit").on("click", function(event){
    event.preventDefault();
  
  // This grabs values from user input
  var newReview = {
    user_name: $("#inputNameMD").val().trim(),
    place_name: $("#inputPlaceNameMD").val().trim(),
    content: $("#inputReviewMD").val().trim(),
    rating: $("#rateYo").rateYo("rating")
  }

  // This clears all of the text boxes
  $("#inputNameMD").val("");
  $("#inputPlaceNameMD").val("");
  $("#inputReviewMD").val("");


  makeNewReview(newReview)

});

// A function for creating a new study place.
function makeNewReview(reviewData) {
  $.post("/api/reviews", reviewData)
}

});