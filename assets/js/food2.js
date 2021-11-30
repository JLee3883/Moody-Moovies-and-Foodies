
/* Drop Down Menu for Moods*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Dropdown menu closes if user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-cont");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

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

fetch("https://tasty.p.rapidapi.com/recipes/detail?id=2270", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
	}
})
.then(response => {
	return response.json()
}) .then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

// for (let x = 0; x < ingredient.length; ++x) {
//   fetchRecipes(ingredient[x]);

// }

// function fetchRecipes(ingredient) {
//   $.ajax(
//     "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=" +
//       ingredient,
//     {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "tasty.p.rapidapi.com",
//         "x-rapidapi-key": "2fd256b7eamsh398f55bc9d76f1dp1ede28jsnaaaff957db6c",
//       },
//     }
//   )
//     .then((response2) => {
//       console.log(response2);

//       let results = response2["results"];
//       for (let i = 0; i < results.length; ++i) {
//         console.log(results[i]["name"]);
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }
