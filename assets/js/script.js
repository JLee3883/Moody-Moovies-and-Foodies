
// var moodTypes = {
//     happy: ['pizza', 'food type 2'],
//     sad: ['food type 1', 'food type 2', 'food type 3'],
//     deptressed: ['food type 1']
// }

// create hero section with title and site description
// create interface for getting user mood (i.e. dropdown? or user enters)
// take user mood input value
// get that value to fetch set genres we made for that mood
// utlize the second fetch with tt code to set it
// do the same for food recipes API
// what data points are we going to keep? posters? details form the fetch request. how to render those in our html

// fetch("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=%2Fchart%2Fpopular%2Fgenre%2Fhorror", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "imdb8.p.rapidapi.com",
// 		"x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
// 	}
// })
// .then(response => response.json())
// .then(data =>   
// 	console.log(data)
// )
// .catch(err => {
// 	console.error(err);
// });

// // "/title/tt10872600/"
// fetch("https://imdb8.p.rapidapi.com/title/get-details?tconst=tt9639470", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "imdb8.p.rapidapi.com",
// 		"x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
// 	}
// })

// .then(response => response.json())
// .then(data =>   
// 	console.log(data)
// )
// .catch(err => {
// 	console.error(err);
// });

// fetch("https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=curry%20chicken", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// fetch("https://imdb8.p.rapidapi.com/title/get-genres?tconst=tt0944947", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "imdb8.p.rapidapi.com",
// 		"x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });


// fetch("https://imdb8.p.rapidapi.com/title/list-popular-genres", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "imdb8.p.rapidapi.com",
// 		"x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });



// $.ajax("https://imdb8.p.rapidapi.com/title/list-popular-genres", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "imdb8.p.rapidapi.com",
// 		"x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
// 	}
// })
// .then(response => {
// 	console.log(response.genres[0].endpoint);
//     $.ajax(fetch("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=%2Fchart%2Fpopular%2Fgenre%2Fadventure", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "imdb8.p.rapidapi.com",
//             "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
//         }
//     })
//     .then(response2 => {
//         console.log(response2);
//     })
//     .catch(err => {
//         console.error(err);
//     });)
    
// })

// .catch(err => {
// 	console.error(err);
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var genre = "/chart/popular/genre/horror";

    $.ajax("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=" + genre, {
    "method": "GET",
    "headers": {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
    }
    })
    .then(response2 => {
    console.log(response2[0]);
    
    // console.log(title)

        let title = response2[8].split("/")
        $.ajax("https://imdb8.p.rapidapi.com/title/get-details?tconst="+ title[2] +"&limit=25&region=US", {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
            }
        })
        .then(response3 => {
            console.log(response3);

        })
        .catch(err => {
            console.error(err);
        });
    })
.catch(err => {
console.error(err);
});

// fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=chocolate%20lava%20cake", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
// 	}
// })
// .then(response => {
// 	console.log(response.body);
// })
// .catch(err => {
// 	console.error(err);
// });

var genre = "/chart/popular/genre/romance";

    $.ajax("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=" + genre, {
    "method": "GET",
    "headers": {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
    }
    })
    .then(response2 => {
    console.log(response2[0]);
    
    // console.log(title)

        let title = response2[8].split("/")
        $.ajax("https://imdb8.p.rapidapi.com/title/get-details?tconst="+ title[2] +"&limit=25&region=US", {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
            }
        })
        .then(response3 => {
            console.log(response3);

        })
        .catch(err => {
            console.error(err);
        });
    })
.catch(err => {
console.error(err);
});

var genre = "/chart/popular/genre/action";

    $.ajax("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=" + genre, {
    "method": "GET",
    "headers": {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
    }
    })
    .then(response2 => {
    console.log(response2[0]);
    
    // console.log(title)

        let title = response2[8].split("/")
        $.ajax("https://imdb8.p.rapidapi.com/title/get-details?tconst="+ title[2] +"&limit=25&region=US", {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
            }
        })
        .then(response3 => {
            console.log(response3);

        })
        .catch(err => {
            console.error(err);
        });
    })
.catch(err => {
console.error(err);
});

/* Drop Down Menu for Moods*/
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Dropdown menu closes if user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }