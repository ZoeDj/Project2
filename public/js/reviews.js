$(document).ready(function() {  
  
  // displayReviews holds all of our reviews
  var displayReviews = $(".display-reviews");
  // var reviewCategorySelect = $("#category");

  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handleReviewDelete);
  $(document).on("click", "button.edit", handleReviewEdit);

  // Variable to hold our reviews
  var reviews;

  // The code below handles the case where we want to get reviews for a specific place
  // Looks for a query param in the url for place_id
  var url = window.location.search;
  var placeId;
  if (url.indexOf("?place_id=") !== -1) {
    placeId = url.split("=")[1];
    getReview(placeId);
  }
  // If there's no placeId we just get all places as usual
  else {
    getReviews();
  }


  // This function grabs reviews from the database and updates the view
  function getReviews(place) {
    placeId = place || "";
    if (placeId) {
      placeId = "/?place_id=" + placeId;
    }
    $.get("/api/revievs" + placeId, function(data) {
      console.log("Review", data);
      review = data;
      if (!review || !review.length) {
        displayEmpty(place);
      }
      else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete review
  function deleteReview(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/reviews/" + id
    })
    .then(function() {
    getReviews(reviewSelect.val());
    });
  }

  // InitializeRows handles appending all of our constructed reviews HTML inside displayReviews
  function initializeRows() {
    displayReviews.empty();
    var reviewToAdd = [];
    for (var i = 0; i < reviews.length; i++) {
      reviewsToAdd.push(createNewRow(review[i]));
    }
    displayReviews.append(reviewToAdd);
  }

  // This function constructs a reviews's HTML
  function createNewRow(review) {
    var formattedDate = new Date(review.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    var newReviewCard = $("<div>");
    newReviewCard.addClass("card");
    var newReviewCardHeading = $("<div>");
    newReviewCardHeading.addClass("card-header");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-info");
    var newReviewTitle = $("<h2>");
    var newReviewDate = $("<small>");
    var newReviewPlace = $("<h5>");
    newReviewPlace.text("Written by: " + review.place.name);
    newReviewPlace.css({
      float: "right",
      color: "blue",
      "margin-top":
      "-10px"
    });
    var newReviewCardBody = $("<div>");
    newReviewCardBody.addClass("card-body");
    var newReviewBody = $("<p>");
    newReviewTitle.text(review.title + " ");
    newReviewBody.text(review.body);
    newReviewDate.text(formattedDate);
    newReviewTitle.append(newReviewDate);
    newReviewCardHeading.append(deleteBtn);
    newReviewCardHeading.append(editBtn);
    newReviewCardHeading.append(newReviewTitle);
    newReviewCardHeading.append(newReviewAuthor);
    newReviewCardBody.append(newReviewBody);
    newReviewCard.append(newReviewCardHeading);
    newReviewCard.append(newReviewCardBody);
    newReviewCard.data("review", review);
    return newReviewCard;
  }

  // This function figures out which review we want to delete and then calls deleteReview 
  function handleReviewDelete() {
    var currentReview = $(this)
      .parent()
      .parent()
      .data("review");
    deleteReview(currentReview.id);
  }

  // This function figures out which review we want to edit and takes it to the appropriate url
  function handleReviewEdit() {
    var currentReview = $(this)
      .parent()
      .parent()
      .data("review");
    window.location.href = "/cms?review_id=" + currentReview.id;
  }

  // This function displays a message when there are no reviews
  function displayEmpty(id) {
    var query = window.location.search;
    var partial = "";
    if (id) {
      partial = " for place #" + id;
    }
    displayReviews.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No reviews yet" + partial + ", navigate <a href='/cms" + query +
    "'>here</a> in order to get started.");
    displayReviews.append(messageH2);
  }

});