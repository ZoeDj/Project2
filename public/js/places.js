$(document).ready(function() {

  
  
  
   /// Placeholder for Places 
  
    // Event Handler Functions
  function getPlaces(){
    console.log('CLIENT-SIDE SEND GET REQUEST')
    $.get("/api/places", function(data){
      for (var i =0; i<data.length; i++){
        var row = $("<div>");
        $row.addClass("place");
        $row.append (
          "<p>" + data[i].neighborhood + "</p>",
          "<p>" + data[i].address + "</p>",
          "<img href=' " + data[i].photo + " ' alt='cool place to study'> ",
          "<p>" + data[i].wifi + "</p>",
          "<p>" + data[i].waiters + "</p>",
          "<p>" + data[i].kidfriendly + "</p>",
          "<p>" + data[i].noiselevel + "</p>",
          "<p>" + data[i].website + "</p>",
        );
    }
    console.log(place)
    
    });
  }
  
    // Run Functions
    getPlaces();
  
  });


  // neighborhood: 
  // address: “5126 Park Rd #1d, Charlotte, NC 28209”
  // photo: “https://images.app.goo.gl/64aLsAWdhD3WWawy6”
  // wifi: true
  // waiters: true
  // dogfriendly:
  // kidfriendly: true
  // website: “http://mugsofcharlotte.com/“
  


// // Get references to page elements
// var $submitBtn = $(".submit-review");


// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveReview: function(review) {
//     return $.ajax({
//       review: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/reviews",
//       data: JSON.stringify(review)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };


// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);

// $exampleList.on("click", ".delete", handleDeleteBtnClick);
