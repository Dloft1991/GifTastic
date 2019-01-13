
// array for buttons
var topics = ["Iron Man", "Thor", "Captain America", "Hulk"]
// make movie buttons
function topicButton() {
    $("#topic-button").empty();

    //for loop the array
    for (var i = 0; i < topics.length; i++) {

        var T = $("<button>");

        T.addClass("topic-btn");
        T.text(topics[i]);

        $("#topic-button").append(T);
    }
}

function buttonMaker() {
    $("#topic-button").empty();

    //for loop through the array and make a butotn
    for (var i = 0; i < topics.length; i++) {
        var b = $("<button>");

        b.addClass("topic-btn");
        b.attr("data-name", topics[i]);
        b.text(topics[i]);

        $("#topic-button").append(b);
    }
}
buttonMaker();


// on click of putton
$("#topic-button").on("click", function () {
    // this refers to the button that was clicked
    var person = $(this).attr("data-name");


    // url for API
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            $("#getGif").text(response);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                var topicDiv = $("div");
                //for the rating
                var p = $("<p>").text("Rating: " + results[i].rating);
                // for the image
                var topicImage = $("<img>");

                topicImage.attr("src", results[i].images.fixed_height.url);

                topicDiv.append(p);
                topicDiv.append(topicImage);
                // 
                $("#get-gif").prepend(topicDiv);
            }
        });

});




