$(document).ready(function () {
  var displayPlaces = $("#display-places");
  var placeHoodSelect = $("#neiborhood");

  // Adding event listeners to the form to create a place object
  $(document).on(".submit", "#place-form", handlePlaceFormSubmit);

  // Getting the initial list of places
  getPlaces();


  // A function to handle what happens when the form is submitted to create a new place
  function handlePlaceFormSubmit(event) {
    event.preventDefault();
    
  // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim()

    //   add other feilds

    ) {
      
      return;
    }
    // Calling the newPlace function and passing in the value of the inputs
    newPlace({
      place_name: nameInput.val().trim(),
      address: addressInput.val().trim(),
      neighborhood: neighborhoodInput.val().trim(),
      wifi: wifiInput.val(),
      waiters: waitersInput.val(),
      kidfriendly: kidfriendlyInput.val(),
      bigtables: bigtablesInput.val(),
      dogfriendly: petfriendlyInput.val(),
      website: websiteInput.val().trim()
    });
  }

  // A function for creating a place. Calls getPlaces upon completion
  function newPlace(placeData) {
    $.post("/api/places", placeData)
      .then(getPlaces);
  }

  // Function for creating a new list row for places
  function createPlaceRow(placeData) {
    var row = $("<div>");
    row.data("place", placeData);
    row.append("<p>" + placeData.place_name + "</p>");
    row.append("<p>" + placeData.address + "</p>");
    row.append("<img src= '" + placeData.image_url + "'>");
    row.append("<p>" + placeData.wifi + "</p>");
    row.append("<p>" + placeData.waiters + "</p>");
    row.append("<p>" + placeData.kidfriendly + "</p>");
    row.append("<p>" + placeData.pet_friendly + "</p>");
    row.append("<p>" + placeData.bigtables + "</p>");
    row.append("<p>" + placeData.website + "</p>");
    return row;
  }


  // Function for retrieving places and getting them ready to be rendered to the page
  function getPlaces() {
    $.get("/api/places", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createPlaceRow(data[i]));
      }
      renderPlaceList(rowsToAdd);
      nameInput.val("");
      addressInput.val("");
      wifiInput.val("");
      waitersInput.val("");
      kidfriendlyInput.val("");
      bigtablesInput.val("");
      dogfriendlyInput.val("");
      websiteInput.val("");
    });
  }

  // // A function for rendering the list of places to the page
  // function renderPlaceList(rows) {
  //   placeList.children().not(":last").remove();
  //   displayPlaces.children(".alert").remove();
  //   if (rows.length) {
  //     console.log(rows);
  //     placeList.prepend(rows);
  //   }
  //   else {
  //     renderEmpty();
  //   }
  // }

  // // Function for handling what to render when there are no authors
  // function renderEmpty() {
  //   var alertDiv = $("<div>");
  //   alertDiv.addClass("alert alert-danger");
  //   alertDiv.text("You must create an Author before you can create a Post.");
  //   authorContainer.append(alertDiv);
  // }

  // // Function for handling what happens when the delete button is pressed
  // function handleDeleteButtonPress() {
  //   var listItemData = $(this).parent("td").parent("tr").data("author");
  //   var id = listItemData.id;
  //   $.ajax({
  //     method: "DELETE",
  //     url: "/api/authors/" + id
  //   })
  //     .then(getAuthors);
  // }
});