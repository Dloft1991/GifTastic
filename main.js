
var heros = []
$("button").on("click", function () {

    var hero = $(this).attr("data-hero");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        hero + "&api_key=dc6zaTOxFJmzC&limit=5";


    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {

            console.log(response);
            var results = response.data;


            for (var i = 0; i < results.length; i++) {

                var heroDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var heroImage = $("<img>");

                heroImage.attr("src", results[i].images.fixed_height.url);
                heroDiv.append(p);
                heroDiv.append(heroImage);

                $("#get-gif").prepend(heroDiv);
            }

        });
});

function makeButton() {

    
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < heros.length; i++) {

    
        var a = $("<button>");
        a.addClass("movie-btn");
        a.attr("data-name", heros[i]);
        
        a.text(heros[i]);
        $("#buttons-view").append(a);
    }
    console.log(heros);
}



//add hero button
$("#add-hero").on("click", function (event) {
    event.preventDefault();
    
    var hero = $("#hero-input").val().trim();
    heros.push(hero);

    //makes button from array
    makeButton();
    
});


// Adding a click event listener to all elements with a class of "movie-btn"
//   $(document).on("click", ".movie-btn", displayMovieInfo);

// Calling the renderButtons function to display the intial buttons
makeButton();


///////////////////000000000000
function displayMovieInfo() {

    var movie = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
      
        for (var i = 0; i < results.length; i++) {

            var heroDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var heroImage = $("<img>");

            heroImage.attr("src", results[i].images.fixed_height.url);
            heroDiv.append(p);
            heroDiv.append(heroImage);

            $("#get-gif").prepend(heroDiv);
        }

      });


}
