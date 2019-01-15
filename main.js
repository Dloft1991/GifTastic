
// array for buttons
var topics = ["Iron Man", "Thor", "Captain America", "Hulk"];
// make movie buttons

function showName() {
    var person = $(this).attr("data-name");

    // url for API
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=oLPcx3ePgUFvCN81AE7T51EJD7YhBd7V&limit=5";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(queryURL);
            console.log(response);

            var imageURL = response.data.image_original_url;

            // var personDiv = $("<div class='movie'>");

            var heroImage = $("<img>");

            heroImage.attr("src", imageURL);
            heroImage.attr("alt", "Hero");

            $("#get-gif").prepend(heroImage);

            // //paragraph for rating
            // var rate = $("<p>").text("Rating: " + rating);
            // personDiv.append(rate);

            // // get image
            // var heroImage = $("<img>");
            // heroImage.attr("src", result[i].images.fixed_height.url);

            // personDiv.append(heroImage);
    
            // $("#get-gif").prepend(personDiv);

        });
}

function buttonMaker() {

    $("#hero-button").empty();

    for (var i = 0; i < topics.length; i++) {

        var a = $("<button>");

        a.addClass("hero-btn");
        a.attr("data-name", topic[i]);
        a.text(topic[i]);

        $("#hero-button").append(a);
    }
}



// // on click of putton
// //
// $("button").on("click", function () {

//     // this refers to the button that was clicked
//     var person = $(this).attr("data-name");

//     // url for API
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         person + "&api_key=oLPcx3ePgUFvCN81AE7T51EJD7YhBd7V&limit=5";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//         .then(function (response) {
//             console.log(queryURL);
//             console.log(response);

//             //returning results
//             var results = response.data;

//             for (var i = 0; i < results.length; i++) {

//                 var topicDiv = $("div");
//                 //for the rating
//                 var p = $("<p>").text("Rating: " + results[i].rating);
//                 // for the image
//                 var topicImage = $("<img>");

//                 topicImage.attr("src", results[i].images.fixed_height.url);

//                 topicDiv.prepend(p);
//                 topicDiv.prepend(topicImage);


//                 $("#getGif").prepend(topicDiv);

//             }
//         });
//         $("#add-something").on("click"), function(event) {
//             event.preventDefault();

//             var newbie = $("#add-hero").val().trim();

//             newbie.push()
//         }


// });









