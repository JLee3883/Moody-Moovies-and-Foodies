
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
  // "meatballs",
  "banana split",
  "lobster",
  "steak",
  "cheesecake",
];

// fetch("https://tasty.p.rapidapi.com/recipes/detail?id=2270", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
// 	return response.json()
// }) .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// async function recipesRequest(recipes){
//     await $.ajax("https://tasty.p.rapidapi.com/recipes/detail?id=" + recipes, {
//     "method": "GET",
//     "headers": {
//     "x-rapidapi-host": "tasty.p.rapidapi.com",
//     "x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
//     }
//     })
//     .then(async response2 => {
//     console.log(response2[0]);
		
// 		let title = response2[8].split('/')
// 		await $.ajax("https://tasty.p.rapidapi.com/recipes/detail?tconst=" + title[2] +"&limit=25&region=US", {
//     "method": "GET",
//     "headers": {
// 	"x-rapidapi-host": "tasty.p.rapidapi.com",
// 	"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
//     }
//     })
// 	.then(response3 => {
// 		console.log(response3);
// 	})
// 	.catch(err => {
// 		console.error(err);
// 	});
// })
// .catch(err => {
// console.error(err);
// });
// .then(response3 => {
// 	console.log(response3);
// 	var recipeContainer = document.querySelector('#tense');
// 	var recipeCard = document.createElement('div');
// 	recipeCard.setAttribute('class', 'card');

// }

// //banana split
// fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=Banana%20split", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
//   return response.json()
// }) .then(response => {
//   console.log(response);
// })
// .catch(err => {
//   console.error(err);
// });
// //Tomato And Roasted Garlic Pizza Pie
// fetch("https://tasty.p.rapidapi.com/recipes/detail?id=7577", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
//   return response.json()
// }) .then(response => {
//   console.log(response);
// })
// .catch(err => {
//   console.error(err);
// });
// //rainbow dessert
// fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=dessert", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
//   return response.json()
// }) .then(response => {
//   console.log(response);
// })
// .catch(err => {
//   console.error(err);
// });
// //mushroom-kale-stew
// fetch("https://tasty.p.rapidapi.com/recipes/detail?id=7459", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
//   return response.json()
// }) .then(response => {
//   console.log(response);
// })
// .catch(err => {
//   console.error(err);
// });
// //chicken
// fetch("https://tasty.p.rapidapi.com/recipes/detail?id=2437", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
//   	return response.json()
//   }) .then(response => {
//   	console.log(response);
//   })
//   .catch(err => {
//   	console.error(err);
//   });
// //chocolate-fudge-box-brownie-cheesecake
// fetch("https://tasty.p.rapidapi.com/recipes/detail?id=767", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
// 	return response.json()
// }) .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
// //Spicy-tuna-pasta
// fetch("https://tasty.p.rapidapi.com/recipes/detail?id=7658", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
// 	return response.json()
// }) .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
// //peanutbutter oatmeal
// fetch("https://tasty.p.rapidapi.com/recipes/detail?id=7724", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
// 	return response.json()
// }) .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
// //Seared seafood
// fetch("https://tasty.p.rapidapi.com/recipes/detail?id=4714", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
// 	return response.json()
// }) .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
// //wings
// fetch("https://tasty.p.rapidapi.com/recipes/detail?id=7954", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
// 	return response.json()
// }) .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
// //burger
// fetch("https://tasty.p.rapidapi.com/recipes/detail?id=3076", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
// 	return response.json()
// }) .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
// //popcorn
// fetch("https://tasty.p.rapidapi.com/recipes/detail?id=5434", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
// 	return response.json()
// }) .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
//  //Watermelon Salad With Spinach And Mango
// fetch("https://tasty.p.rapidapi.com/recipes/detail?id=3945", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
// 	return response.json()
// }) .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
// Parfait
// fetch("https://tasty.p.rapidapi.com/recipes/detail?id=7217", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
// 	return response.json()
// }) .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
// ///cho banana crepes
// fetch("https://tasty.p.rapidapi.com/recipes/detail?id=1354", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
// 	return response.json()
// }) .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// ///salmon
// fetch("https://tasty.p.rapidapi.com/recipes/detail?id=7740", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
// 	return response.json()
// }) .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// ///meatballs
// fetch("https://tasty.p.rapidapi.com/recipes/detail?id=2270", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "37816d4546mshf5f01f25973adcfp1288a4jsn17f269e6fcf8"
// 	}
// })
// .then(response => {
// 	return response.json()
// }) .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

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
