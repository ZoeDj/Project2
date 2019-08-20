$(document).ready(function() {

/// JQUERY SELECTOR REFERENCES -  (Note to self: create handlebars for elements that repeat often, iterate, toggle between values etc.)
  var eventList = $("#event-list");
  var placesList = $("#places-list");
  var reviewsList = $("#reviews-list");
  var usersList = $("#users-list");

  var joinForm = $("#join-form")
  var reviewForm = $("review-form")

/// ROUTE OBJECTS
 var eventsObject = {};
 var placesObject = {};
 var reviewsObject = {};
 var usersObject = {};

 /// Placeholder for Event Listener

  // Event Handler Functions
function getEvents (){
  console.log('CLIENT-SIDE GET REQUEST for all events')
  $.get("/api/events", function(data){
    var eventsToAdd = [],
    for (var i =0; i<data.length; i++){
    eventsToAdd.push(data[i]);
  }
  console.log(eventsToAdd)
  // renderEventList(rowsToAdd);
  // eventInput.val("");
  });
}

  // Run Functions
  getEvents();













  /// PLEASE IGNORE /// SANDBOX CODE BELOW ///

//   // A function to handle what happens when a new event is created
//   function newEventHandler(event) {
//     event.preventDefault();
//     // Client Side Flag:  Don't do anything if the name fields hasn't been filled out
//     if (!eventInput.val().trim().trim()) {
//       return;
//     }
//     // Calling the upsertAuthor function and passing in the value of the name input
//     upsertEvent({
//       event_topic: eventInput
//         .val()
//         .trim()
//     });
//   }

//   // Generates a Post request to server to set up a new event 
//   function upsertEvent(eventData) {
//     console.log('CLIENT SIDE REQUEST to add a new event')
//     $.post("/api/events", eventData)
//       .then(getEvents);
//   }



//   function joinExistingEvent (event){

//   }

//   // Function for creating a new list row for authors
//   function createAuthorRow(authorData) {
//     console.log('create author row being run on client side')
//     var newTr = $("<tr>");
//     newTr.data("author", authorData);
//     newTr.append("<td>" + authorData.name + "</td>");
//     if (authorData.Posts) {
//       newTr.append("<td> " + authorData.Posts.length + "</td>");
//     } else {
//       newTr.append("<td>0</td>");
//     }
//     newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
//     newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
//     newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
//     return newTr;
//   }

//   // Function for retrieving authors and getting them ready to be rendered to the page
//   function getAuthors() {
//     console.log('Get Authors being run on client side')
//     $.get("/api/authors", function(data) {
//       var rowsToAdd = [];
//       for (var i = 0; i < data.length; i++) {
//         rowsToAdd.push(createAuthorRow(data[i]));
//       }
//       renderAuthorList(rowsToAdd);
//       nameInput.val("");
//     });
//   }

//   // A function for rendering the list of authors to the page
//   function renderAuthorList(rows) {
//     console.log('render Author list being run on client side')
//     authorList.children().not(":last").remove();
//     authorContainer.children(".alert").remove();
//     if (rows.length) {
//       console.log(rows);
//       authorList.prepend(rows);
//     }
//     else {
//       renderEmpty();
//     }
//   }

//   // Function for handling what to render when there are no authors
//   function renderEmpty() {
//     console.log('render EMPTY being run on Client Side')
//     var alertDiv = $("<div>");
//     alertDiv.addClass("alert alert-danger");
//     alertDiv.text("You must create an Author before you can create a Post.");
//     authorContainer.append(alertDiv);
//   }

//   // Function for handling what happens when the delete button is pressed
//   function handleDeleteButtonPress() {

//     console.log('delete REQUEST FROM USER')
//     var listItemData = $(this).parent("td").parent("tr").data("author");
//     var id = listItemData.id;
//     $.ajax({
//       method: "DELETE",
//       url: "/api/authors/" + id
//     })
//       .then(getAuthors);
//   }
// });








// // JQUERY SELECTOR REFERENCES -  (Note to self: create handlebars for elements that repeat often, iterate, toggle between values etc.)
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // API REQUESTS TO SERVER:  The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
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

// // DOM MANIPULATION: refreshExamples gets new examples from the db and repopulates the list
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
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
