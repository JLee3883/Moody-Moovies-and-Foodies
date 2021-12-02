let movieWrapper = $("#movieWrapper")[0];
let numMovies = 0;
let numFoods = 0;
let select = 0;
var parent;
/* Drop Down Menu for Moods*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Dropdown menu closes if user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-cont");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function toggleTense() {
  genreRequest("/chart/popular/genre/family", "#movie1");
  setTimeout(genreRequest("/chart/popular/genre/musical", "#movie2"),1000);
  setTimeout(genreRequest("/chart/popular/genre/comedy", "#movie3"),2000);

  setTimeout(recipeRequest("id=7569", "#recipe1"),3000);
  setTimeout(recipeRequest("id=7740", "#recipe2"),4000);
  setTimeout(recipeRequest("id=767", "#recipe3"),5000);
}

function toggleIrritated() {
  genreRequest("/chart/popular/genre/mystery", "#movie1");
  setTimeout(genreRequest("/chart/popular/genre/thriller", "#movie2"),1000);
  setTimeout(genreRequest("/chart/popular/genre/drama","#movie3"),2000);

  setTimeout(recipeRequest("id=7217", "#recipe1"),3000);
  setTimeout(recipeRequest("id=3945", "#recipe2"),4000);
  setTimeout(recipeRequest("id=5434", "#recipe3"),5000);
}

function toggleRelax() {
  genreRequest("/chart/popular/genre/comedy", "#movie1");
  setTimeout(genreRequest("/chart/popular/genre/fantasy", "#movie2"),1000);
  setTimeout(genreRequest("/chart/popular/genre/history", "#movie3"),2000);

  setTimeout(recipeRequest("id=3076", "#recipe1"),3000);
  setTimeout(recipeRequest("id=7954", "#recipe2"),4000);
  setTimeout(recipeRequest("id=4714", "#recipe3"),5000);
}

function toggleDare() {
  genreRequest("/chart/popular/genre/horror", "#movie1");
  setTimeout(genreRequest("/chart/popular/genre/thriller", "#movie2"),1000);
  setTimeout(genreRequest("/chart/popular/genre/mystery", "#movie3"),2000);

  setTimeout(recipeRequest("id=7658", "#recipe1"),3000);
  setTimeout(recipeRequest("id=7911", "#recipe2"),4000);
  setTimeout(recipeRequest("id=1749", "#recipe3"),5000);
}

function toggleGloomy() {
  genreRequest("/chart/popular/genre/sci-fi", "#movie1");
  setTimeout(genreRequest("/chart/popular/genre/mystery", "#movie2"),1000);
  setTimeout(genreRequest("/chart/popular/genre/musical", "#movie3"),2000);

  recipeRequest("id=7724", "#recipe1");
  setTimeout(recipeRequest("id=4714", "#recipe2"),1000);
  setTimeout(recipeRequest("id=767", "#recipe3"),2000);
}

function toggleExcited() {
  genreRequest("/chart/popular/genre/action", "#movie1");
  setTimeout(genreRequest("/chart/popular/genre/musical", "#movie2"),1000);
  setTimeout(genreRequest("/chart/popular/genre/mystery", "#movie3"),2000);

  setTimeout(recipeRequest("id=2437", "#recipe1"),3000);
  setTimeout(recipeRequest("id=7459", "#recipe2"),4000);
  setTimeout(recipeRequest("id=2373", "#recipe3"),5000);
}

function toggleCheerful() {
  genreRequest("/chart/popular/genre/comedy", "#movie1");
  setTimeout(genreRequest("/chart/popular/genre/animation", "#movie2"),1000);
  setTimeout(genreRequest("/chart/popular/genre/adventure", "#movie3"),2000);

  setTimeout(recipeRequest("id=7577", "#recipe1"),3000);
  setTimeout(recipeRequest("id=2270", "#recipe2"),4000);
  setTimeout(recipeRequest("id=1928", "#recipe3"),5000);
}

function toggleDate() {
  genreRequest("/chart/popular/genre/romance", "#movie1");
  setTimeout(genreRequest("/chart/popular/genre/drama", "#movie2"),1000);
  setTimeout(genreRequest("/chart/popular/genre/horror", "#movie3"),2000);

  setTimeout(recipeRequest("id=7754", "#recipe1"),3000);
  setTimeout(recipeRequest("id=4265", "#recipe2"),4000);
  setTimeout(recipeRequest("id=767", "#recipe3"),5000);
}

async function movieRequest(id) {
  await $.ajax(
    "https://imdb8.p.rapidapi.com/title/get-details?tconst=" +
      id +
      "&limit=25&region=US",
    {
      method: "GET",
      "headers": {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "c42eae7b2cmsh750d50eba408ed7p11ee89jsnc15d45c7e348"
      },
    }
  )
    .then((response3) => {
      if (numMovies % 3 == 0) {
        // Add new row after every 3 movies
        parent = document.createElement("div");
        parent.setAttribute("class", "row");
        movieWrapper.appendChild(parent);
      }
      numMovies++;
      let movieCard = document.createElement("div");
      movieCard.setAttribute("class", "card");
      movieCard.setAttribute("class", "col s6 m4 l4");
      let movieCardImage = document.createElement("div");
      movieCardImage.setAttribute("class", "card-image");
      let movieImage = document.createElement("img");
      movieImage.setAttribute("class", "cardImage");
      movieImage.setAttribute("width", "100%");
      movieImage.setAttribute("height", "700px");
      movieImage.setAttribute("src", response3.image.url);
      movieCardImage.appendChild(movieImage);
      movieCard.appendChild(movieCardImage);
      parent.appendChild(movieCard);

      
    })
    .catch((err) => {
    });
}

async function genreRequest(genre, id) {
  await $.ajax(
    "https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=" +
      genre,
    {
      method: "GET",
      "headers": {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "c42eae7b2cmsh750d50eba408ed7p11ee89jsnc15d45c7e348"
      },
    }
  )
    .then(async (response2) => {
      console.log(response2[0]);
      console.log(response2);
      let len = response2.length;
      let idx = Math.floor(Math.random() * (len - 1));
      let title = response2[idx].split("/");
      movieRequest(title[2], "#movie1");
    })
    .catch((err) => {
      
    });
}

async function recipeRequest(name) {
  await fetch("https://tasty.p.rapidapi.com/recipes/detail?" + name, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "tasty.p.rapidapi.com",
      "x-rapidapi-key": "8ffd04e6c8mshac9e017c999bcf8p12642ajsn9d42f73d1957",
    },
  })
    .then(async (response2) => {
      if (response2.ok) return response2.json();
      console.log(response2[0]);
    })

    .then((response3) => {
      if (numFoods % 3 == 0) {
        // Add new row after every 3 movies
        parent = document.createElement("div");
        parent.setAttribute("class", "row");
        movieWrapper.appendChild(parent);
      }
      numFoods++;
      let recipeCard = document.createElement("div");
      recipeCard.setAttribute("class", "card");
      recipeCard.setAttribute("class", "col s6 m4 l4");
      let recipeCardImage = document.createElement("div");
      recipeCardImage.setAttribute("class", "card-image");
      let recipeImage = document.createElement("img");
      recipeImage.setAttribute("class", "cardImage");
      recipeImage.setAttribute("width", "100%");
      recipeImage.setAttribute("height", "550px");
      recipeImage.setAttribute("src", response3.thumbnail_url);
      recipeCardImage.appendChild(recipeImage);
      recipeCard.appendChild(recipeCardImage);
      parent.appendChild(recipeCard);
    });
}
