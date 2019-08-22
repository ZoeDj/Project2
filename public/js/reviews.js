/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
$(document).ready(function() {
    // Adding event listeners to the form to create a review object
    $("#submit").on("click", function(event) {
        event.preventDefault();

        // This grabs values from user input
        var newReview = {
            user_name: $("#inputNameMD").val().trim(),
            place_name: $("#inputPlaceNameMD").val().trim(),
            content: $("#inputReviewMD").val().trim(),
            rating: $("#rateYo").rateYo("rating")
        };

        // This clears all of the text boxes
        $("#inputNameMD").val("");
        $("#inputPlaceNameMD").val("");
        $("#inputReviewMD").val("");

        makeNewReview(newReview);
    });

    // A function for creating a new study place.
    function makeNewReview(reviewData) {
        $.post("/api/reviews", reviewData);
    }
});
/* eslint-disable prettier/prettier */
$(document).ready(function () {
    var placeID = window.location.href;
    var splitString = placeID.split("=");
    placeID = splitString[1];
    var queryURL = "/api/places/" + placeID;

    $.get(queryURL, function (res) {
        console.log(res);
        
        var placePic = $("<img>").attr("src", res.image_url);
        placePic.attr("style", "width: 20%; float: left; margin: 5%;");
        placePic.appendTo("#place-info");

        var placeBody = $("<div>").attr("style", "width: 70%; float: left; margin-top: 5%");

        var placeTitle = $("<h2>");
        placeTitle.appendTo(placeBody);

        var placeRating = $("<h6>");
        var avgRating = 0;

        var reviewList = $("<div>");

        for (var i in res.reviews) {
            avgRating += res.reviews[i].rating;

            var ratingLine = $("<h5>");

            ratingLine.text("Rated " + res.reviews[i].rating + "/5 by " + res.reviews[i].user_name);
            ratingLine.appendTo(reviewList);

            var reviewLine = $("<p>").text(res.reviews[i].content);
            reviewLine.appendTo(reviewList);
        }

        reviewList.appendTo(placeBody);

        avgRating = avgRating / res.reviews.length;
        if (avgRating === 0 || isNaN(avgRating)) {
            placeRating.text("No reviews yet!");
        }
        else {
            placeTitle.text(res.place_name + "  (" + avgRating + "/5)");
        }
        placeRating.appendTo(placeBody);

        var checkList = $("<div>");
        var checkListTable = $("<ul>");

        if (res.bigtables === true) {
            var listLine = $("<h6>").text("✔️ Big Tables");
            listLine.appendTo(checkListTable);
        }
        else {
            var listLine = $("<h6>").text("❌ Big Tables");
            listLine.appendTo(checkListTable);
        }

        if (res.kidfriendly === true) {
            var listLine = $("<h6>").text("✔️ Kid Friendly");
            listLine.appendTo(checkListTable);
        }
        else {
            var listLine = $("<h6>").text("❌ Kid Friendly");
            listLine.appendTo(checkListTable);
        }

        if (res.petfriendly === true) {
            var listLine = $("<h6>").text("✔️ Pet Friendly");
            listLine.appendTo(checkListTable);
        }
        else {
            var listLine = $("<h6>").text("❌ Pet Friendly");
            listLine.appendTo(checkListTable);
        }

        if (res.waiters === true) {
            var listLine = $("<h6>").text("✔️ Waiters");
            listLine.appendTo(checkListTable);
        }
        else {
            var listLine = $("<h6>").text("❌ Waiters");
            listLine.appendTo(checkListTable);
        }

        if (res.wifi === true) {
            var listLine = $("<h6>").text("✔️ Wifi");
            listLine.appendTo(checkListTable);
        }
        else {
            var listLine = $("<h6>").text("❌ Wifi");
            listLine.appendTo(checkListTable);
        }


        checkListTable.appendTo(checkList);
        checkList.appendTo(placeBody);
        $("#place-info").append(placeBody);
    });

});
