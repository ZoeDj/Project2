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

    // This clears all of the text boxes
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
