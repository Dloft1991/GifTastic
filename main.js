
  // on click of putton
  $("button").on("click", function() {
      // this refers to the button that was clicked
    var person = $(this).attr("data-person");

   // url for API
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=dc6zaTOxFJmzC&limit=10";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      
      .then(function(response) {
        var results = response.data;
    
        for (var i = 0; i < results.length; i++) {

        
          if (results[i].rating !== "r" && results[i].rating !== "PG-13") {

            var gifDiv = $("<div>");
            var rating = results[i].rating;

    // where the rating goes
            var p = $("<p>").text("Rating: " + rating);
// where the image goes
            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.append(p);
            gifDiv.append(personImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        }
      });
  });