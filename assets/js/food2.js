// /* Drop Down Menu for Moods*/
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Dropdown menu closes if user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

var genre = "/chart/popular/genre/horror";

$.ajax(
  "https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=" +
    genre,
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "2fd256b7eamsh398f55bc9d76f1dp1ede28jsnaaaff957db6c",
    },
  }
)
  .then((response2) => {
    console.log(response2);

    let title = response2[8].split("/");
    $.ajax(
      "https://imdb8.p.rapidapi.com/title/get-details?tconst=" +
        title[2] +
        "&limit=25&region=US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key":
            "2fd256b7eamsh398f55bc9d76f1dp1ede28jsnaaaff957db6c",
        },
      }
    )
      .then((response3) => {
        console.log(response3);
      })
      .catch((err) => {
        console.error(err);
      });
  })
  .catch((err) => {
    console.error(err);
  });

var genre = "/chart/popular/genre/horror";
let ingredient = [
  "oatmeal",
  "seafood pasta",
  "chocolate",
  "chicken",
  "kale",
  "lemon dessert",
  "pizza",
  "meatballs",
  "banana split",
  "lobster",
  "steak",
  "cheesecake",
];

// for (let x = 0; x < ingredient.length; ++x) {
//   fetchRecipes(ingredient[x]);

// }

function fetchRecipes(ingredient) {
  $.ajax(
    "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=" +
      ingredient,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "2fd256b7eamsh398f55bc9d76f1dp1ede28jsnaaaff957db6c",
      },
    }
  )
    .then((response2) => {
      console.log(response2);

      let results = response2["results"];
      for (let i = 0; i < results.length; ++i) {
        console.log(results[i]["name"]);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

// /* Drop Down Menu for Moods*/
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Dropdown menu closes if user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }