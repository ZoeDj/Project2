$(document).ready(function () {

  // Adding event listeners to the form to create a place object
  $("#submit").on("click", function(event){
  event.preventDefault();

    // This grabs values from user input
    var newPlace = {
    place_name: $("#inputNameMD").val().trim(),
    // address_name: $("#inputAddressMD").val().trim(),
    address_name: $("#inputZipMD").val().trim(),
    wifi: $("#inputWifi:checked").val(),
    waiters: $("#inputWaiters:checked").val(),
    kidfriendly: $("#inputKidfriendly:checked").val(),
    bigtables: $("#inputBigtables:checked").val(),
    pet_friendly: $("#inputPetfriendly:checked").val(),
    website: $("#inputWebsite").val().trim()
    }

    // This clears all of the text and check boxes 
    $("#inputNameMD").val("");
    $("#inputAddressMD").val("");
    $("#inputZipMD").val("");
    $("#inputWifi:unchecked").val("");
    $("#inputWaiters:unchecked").val("");
    $("#inputKidfriendly:unchecked").val("");
    $("#inputBigtables:unchecked").val("");
    $("#inputPetfriendly:unchecked").val("");
    $("#inputWebsite").val("");

    makeNewPlace(newPlace)

});


  // A function for creating a new study place.
  function makeNewPlace(placeData) {
    $.post("/api/places", placeData)
  }

});

// Don't do anything if the name fields hasn't been filled out
// if (!nameInput.val().trim()
/* eslint-disable prettier/prettier */
function findNeighborhood(zipString) {
    var east = ["28027", "28075", "28212", "28215", "28227"];
    var south = [
        "28105",
        "28134",
        "28209",
        "28210",
        "28211",
        "28226",
        "28270",
        "28277"
    ];
    var west = ["28012", "28120", "28208", "28214", "28217", "28273", "28278"];
    var north = ["28213", "28262", "28269", "28216", "28078"];
    var center = ["28202", "28203", "28204", "28205", "28206", "28207"];

    if (east.indexOf(zipString) !== -1) {
        return "Eastern Charlotte";
    }

    else if (west.indexOf(zipString) !== -1) {
        return "Western Charlotte";
    }

    else if (north.indexOf(zipString) !== -1) {
        return "Northern Charlotte";
    }

    else if (south.indexOf(zipString) !== -1) {
        return "Southern Charlotte";
    }

    else if (center.indexOf(zipString) !== -1) {
        return "Central Charlotte";
    }

    else {
        return "Charlotte only, pal!";
    }
}

function displayResults(obj) {
    for (var i in obj) {

        var newCard = $("<div>").addClass("card");
        newCard.attr("data-id", obj[i].id);

        var newPic = $("<img>").attr("src", obj[i].image_url);
        newPic.addClass("card-img-top");

        var newBody = $("<div>").addClass("card-body");

        var newTitle = $("<h4>").addClass("card-title");
        newTitle.text(obj[i].place_name);
        newTitle.appendTo(newBody);

        var newP = $("<p>").addClass("card-text");
        var avgRating = 0;
        for (var j in obj[i].reviews) {
            avgRating += obj[i].reviews[j].rating;
        }
        avgRating = avgRating/obj[i].reviews.length;
        if (avgRating === 0 || isNaN(avgRating)) {
            newP.text("No reviews yet!");
        }
        else {
            newP.text("Average Rating: " + avgRating + "/5");
        }
        newP.appendTo(newBody);

        var newButton = $("<a>").addClass("btn btn-primary");
        newButton.text("See More Info");
        newButton.attr("href", "/reviews.html?id=" + obj[i].id);
        newBody.append(newButton);

        newBody.appendTo(newCard);
        $("#display-places").append(newCard);
    }
}

$("#search").on("click", function () {
    if ($("#zipinput").val() !== "") {
        var zip = $("#zipinput").val().trim();
        var hood = findNeighborhood(zip);
        $("#mySelect").val(hood);
        $("html, body").animate({
            scrollTop: $("#study-spots").offset().top
        }, 2000);
    }
    else if ($("#mySelect").val() !== "none") {
        var hood = $("#mySelect").val();
        $("#mySelect").val(hood);
        $("html, body").animate({
            scrollTop: $("#study-spots").offset().top
        }, 2000); 
    }
    else {
        console.log("Make a selection!");
    }

    var hoodFind;

    switch (hood) {
    case "Northern Charlotte":
        hoodFind = "north";
        break;
    case "Western Charlotte":
        hoodFind = "west";
        break;
    case "Southern Charlotte":
        hoodFind = "south";
        break;
    case "Eastern Charlotte":
        hoodFind = "east";
        break;
    case "Central Charlotte":
        hoodFind = "center";
        break;
    default:
        console.log("No neighborhood selected!");
    }

    //ajax GET call that returns all neighborhoods with "hood" as a parameter
    $.get("/api/places/?neighborhood=" + hoodFind, function (res) {
        displayResults(res);
    });

});
