
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

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < heros.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class of movie-btn to our button
      a.addClass("movie-btn");
      // Adding a data-attribute
      a.attr("data-name", heros[i]);
      // Providing the initial button text
      a.text(heros[i]);
      // Adding the button to the buttons-view div
      $("#buttons-view").append(a);
    }
    console.log(heros);
  }

  // This function handles events where a movie button is clicked
  $("#add-hero").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var hero = $("#hero-input").val().trim();

    // Adding movie from the textbox to our array
    heros.push(hero);

    // Calling renderButtons which handles the processing of our movie array
    makeButton();
  });

  // Adding a click event listener to all elements with a class of "movie-btn"
//   $(document).on("click", ".movie-btn", displayMovieInfo);

  // Calling the renderButtons function to display the intial buttons
  makeButton();