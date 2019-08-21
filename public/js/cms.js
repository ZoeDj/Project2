$(document).ready(function() {
  // Getting jQuery references to the review body, title, form, and place select
  var bodyInput = $("#body");
  var titleInput = $("#title");
  var cmsForm = $("#cms");
  var placeSelect = $("#place");
  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a review)
  var url = window.location.search;
  var reviewId;
  var placeId;
  // Sets a flag for whether or not we're updating a review to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the review id from the url
  // In '?review_id=1', reviewId is 1
  if (url.indexOf("?review_id=") !== -1) {
    reviewId = url.split("=")[1];
    getreviewData(reviewId, "review");
  }
  // Otherwise if we have an place_id in our url, preset the place select box to be our place
  else if (url.indexOf("?place_id=") !== -1) {
    placeId = url.split("=")[1];
  }

  // Getting the place, and their reviews
  getPlaces();

  // A function for handling what happens when the form to create a new review is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the review if we are missing a body, title, or place
    if (!titleInput.val().trim() || !bodyInput.val().trim() || !placeSelect.val()) {
      return;
    }
    // Constructing a newReview object to hand to the database
    var newReview = {
      title: titleInput.val().trim(),
      body: bodyInput.val().trim(),
      placeId: placeSelect.val()
    };

    // If we're updating a review run updateReview to update a review 
    // Otherwise run submitReview to create a whole new review
    if (updating) {
      newReview.id = reviewId;
      updateReview(newReview);
    }
    else {
      submitReview(newReview);
    }
  }

  // Submits a new review and brings user to places page upon completion
  function submitReview(review) {
    $.review("/api/reviews", review, function() {
      window.location.href = "/places";
    });
  }

  // Gets review data for the current review if we're editing, or if we're adding to an place's existing review
  function getReviewData(id, type) {
    var queryUrl;
    switch (type) {
    case "review":
      queryUrl = "/api/reviews/" + id;
      break;
    case "place":
      queryUrl = "/api/places/" + id;
      break;
    default:
      return;
    }
    $.get(queryUrl, function(data) {
      if (data) {
        console.log(data.placeId || data.id);
        // If this review exists, prefill our cms forms with its data
        titleInput.val(data.title);
        bodyInput.val(data.body);
        placeId = data.placeId || data.id;
        // If we have a review with this id, set a flag for us to know to update the review
        // when we hit submit
        updating = true;
      }
    });
  }

  // A function to get places and then render our list of places
  function getPlaces() {
    $.get("/api/places", renderPlaceList);
  }
  // Function to either render a list of places, or if there are none, direct the user to the page
  // to create an place first
  function renderPlaceList(data) {
    if (!data.length) {
      window.location.href = "/places";
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createPlaceRow(data[i]));
    }
    placeSelect.empty();
    console.log(rowsToAdd);
    console.log(placeSelect);
    placeSelect.append(rowsToAdd);
    placeSelect.val(placeId);
  }

  // Creates the places options in the dropdown
  function createPlaceRow(place) {
    var listOption = $("<option>");
    listOption.attr("value", place.neighborhood);
    listOption.text(place.name);
    return listOption;
  }

  // Update a given review, bring user to the place's page when done
  function updateReview(review) {
    $.ajax({
      method: "PUT",
      url: "/api/reviews",
      data: review
    })
      .then(function() {
        window.location.href = "/places";
      });
  }
});
  