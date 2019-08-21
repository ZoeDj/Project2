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
        var newLine = $("<li>").addClass("list-group-item");
        newLine.attr("data-id", obj[i].id);
        var newLink = $("<a>").attr("href", obj[i].website);
        newLink.text(obj[i].place_name);
        newLink.appendTo(newLine);
        var newButton = $("<button>").addClass("btn btn-danger float-right delete");
        newLine.append(newButton);
        $("#places-list").append(newLine);
    }
}

$("#search").on("click", function () {
    if ($("#zipinput").val() !== "") {
        var zip = $("#zipinput").val().trim();
        var hood = findNeighborhood(zip);
        $("#mySelect").val(hood);
        console.log("They live in " + hood);
        //href to the next section of the page
    }
    else if ($("#mySelect").val() !== "none") {
        var hood = $("#mySelect").val();
        console.log("They live in " + hood);
        //href to the next section of the page
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
        console.log("Yikes!");
    }

    //ajax GET call that returns all neighborhoods with "hood" as a parameter
    $.get("/api/places/?neighborhood=" + hoodFind, function (res) {
        console.log("/api/places/?neighborhood=" + hoodFind);
        console.log(res);
        displayResults(res);
        console.log("done");
    });

});