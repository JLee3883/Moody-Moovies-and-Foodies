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

function toggleTense() {
    // genreRequest("/chart/popular/genre/family","#movie1");
    // setTimeout(genreRequest("/chart/popular/genre/musical","#movie2"),1000);
    // setTimeout(genreRequest("/chart/popular/genre/comedy","#movie3"),2000);  
    
    recipeRequest("recipes/detail?id=7577");
    
}

// function toggleIrritated() {
//     genreRequest("/chart/popular/genre/mystery","#movie1");

//     setTimeout(genreRequest("/chart/popular/genre/thriller","#movie2"),1000);
   
//     setTimeout(genreRequest("/chart/popular/genre/drama","#movie3"),2000);
      
// }

// function toggleRelax() {
//     genreRequest("/chart/popular/genre/comedy","#movie1");

//     setTimeout(genreRequest("/chart/popular/genre/fantasy","#movie2"),1000);

//     setTimeout(genreRequest("/chart/popular/genre/history","#movie3"),2000);
// }

// function toggleDare() {
//     genreRequest("/chart/popular/genre/horror","#movie1");

//     setTimeout(genreRequest("/chart/popular/genre/thriller","#movie2"),1000);

//     setTimeout(genreRequest("/chart/popular/genre/mystery","#movie3"),2000);
// }

// function toggleGloomy() {
//     genreRequest("/chart/popular/genre/sci-fi","#movie1");

//     setTimeout(genreRequest("/chart/popular/genre/mystery","#movie2"),1000);

//     setTimeout(genreRequest("/chart/popular/genre/musical","#movie3"),2000);
// }

// function toggleExcited() {
//     genreRequest("/chart/popular/genre/action","#movie1");

//     setTimeout(genreRequest("/chart/popular/genre/musical","#movie2"),1000);

//     setTimeout(genreRequest("/chart/popular/genre/mystery","#movie3"),2000);
// }

// function toggleCheerful() {
//     genreRequest("/chart/popular/genre/comedy","#movie1");

//     setTimeout(genreRequest("/chart/popular/genre/animation","#movie2"),1000);

//     setTimeout(genreRequest("/chart/popular/genre/adventure","#movie3"),2000);
// }

// function toggleDate() {
//     genreRequest("/chart/popular/genre/romance","#movie1");

//     setTimeout(genreRequest("/chart/popular/genre/drama","#movie2"),1000);

//     setTimeout(genreRequest("/chart/popular/genre/horror","#movie3"),2000);
// }

// async function genreRequest(genre,id){
//     await $.ajax("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=" + genre, {
//     "method": "GET",
//     "headers": {
//     "x-rapidapi-host": "imdb8.p.rapidapi.com",
//     "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
//     }
//     })
//     .then(async response2 => {
//     console.log(response2[0]);

//         let title = response2[8].split("/")
//         await $.ajax("https://imdb8.p.rapidapi.com/title/get-details?tconst="+ title[2] +"&limit=25&region=US", {
//             "method": "GET",
//             "headers": {
//             "x-rapidapi-host": "imdb8.p.rapidapi.com",
//             "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
//             }
//         })
//         .then(response3 => {
//             console.log(response3);
//             console.log(id);
//             var movieContainer = document.querySelector(id);
//             movieContainer.innerHTML= "";
//             var movieCard = document.createElement("div");
//             movieCard.setAttribute("class", "card");
//             var movieCardImage = document.createElement("div");
//             movieCardImage.setAttribute("class", "card-image");
//             var movieImage = document.createElement("img");
//             movieImage.setAttribute("class", "cardImage");
//             movieImage.setAttribute("src", response3.image.url);
//             document.createElement("div");
//             movieCardImage.appendChild(movieImage);
//             movieCard.appendChild(movieCardImage);
//             movieContainer.appendChild(movieCard);

//         })
//         .catch(err => {
//             console.error(err);
//         });
//     })
//     .catch(err => {
//     console.error(err);
// });
// }

async function recipeRequest(name){
  await fetch("https://tasty.p.rapidapi.com/recipes/detail?" + name, {
  "method": "GET",
  "headers": {
  "x-rapidapi-host": "tasty.p.rapidapi.com",
  "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
  }
  })
  .then(async response2 => {
      if (response2.ok)return response2.json();
      console.log(response2[0]);
    })

    //   let name = response2[8].split("/")
    //   await $.ajax("https://tasty.p.rapidapi.com/recipes/detail?&=&id="+ name[2],{
    //       "method": "GET",
    //       "headers": {
    //       "x-rapidapi-host": "tasty.p.rapidapi.com",
    //       "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
    //       }
    //   })

    // "<img src="+ recipe.thumbnail_url + " /> ";
      .then(response3 => {
          console.log(response3.results);
          var recipeContainer = document.querySelector("#recipeWrapper");
          recipeContainer.innerHTML= "";
          const recipe = response3.results[0];
         console.log (recipe);
      var recipeCard = document.createElement("div");
      recipeCard.setAttribute("class", "card");
      var recipeCardImage = document.createElement("div");
      recipeCardImage.setAttribute("class", "card-image");
      var recipeImage = document.createElement("img");
      recipeImage.setAttribute("class", "cardImage");
      recipeImage.setAttribute("src", recipe.thumbnail_url);
    //   document.createElement("div");
      recipeCardImage.appendChild(recipeImage);
      recipeCard.appendChild(recipeCardImage);
      recipeContainer.appendChild(recipeCard);;

         for (let i = 0; i < response3.results[0].instructions.length; i++) {
             const recipe = response3.results[0].instructions [i].display_text;
             console.log (recipe);
             var display_text = document.createElement("p");
             display_text.textContent = recipe;
             recipeContainer.appendChild(display_text);
        //   var recipeCard = document.createElement("div");
        //   recipeCard.setAttribute("class", "card");
        //   var recipeCardImage = document.createElement("div");
        //   recipeCardImage.setAttribute("class", "card-image");
        //   var recipeImage = document.createElement("img");
        //   recipeImage.setAttribute("class", "cardImage");
        //   recipeImage.setAttribute("src", recipe.thumbnail_url);
        // //   document.createElement("div");
        //   recipeCardImage.appendChild(recipeImage);
        //   recipeCard.appendChild(recipeCardImage);
        //   recipeContainer.appendChild(recipeCard);;

             
         }
         




          console.log(name);
        

      })
    //   .catch(err => {
    //       console.error(err);
    //   });
//   .catch(err => {
//   console.error(err);
// });
}

// fetch("https://tasty.p.rapidapi.com/recipes/detail?id=2270", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
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
