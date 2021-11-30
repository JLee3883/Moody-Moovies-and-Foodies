
// var moodTypes = {
//     happy: ['pizza', 'food type 2'],
//     sad: ['food type 1', 'food type 2', 'food type 3'],
//     deptressed: ['food type 1']
// }

// create hero section with title and site description
// create interface for getting user mood (i.e. dropdown? or user enters)
// take user mood select value
// get that value to fetch set genres we made for that mood
// do the same for food recipes API
// what data points are we going to keep? posters? details form the fetch request. how to render those in our html

function toggleTense() {
    var myTense = document.getElementById('tense');
    var displaySetting = myTense.style.display;
    console.log(displaySetting);
   
    if (displaySetting == 'block') {
      myTense.style.display = 'none';
    //   tenseButton.innerHTML = 'Show tense cards';
      myTense.classList.add("hide");
      myTense.classList.remove("show");     
    }
    else {
        genreRequest("/chart/popular/genre/family");
        myTense.style.display = 'block';
        myTense.classList.add("show");
        myTense.classList.remove("hide");
    //   tenseButton.innerHTML = 'Hide tense cards';
    }
}

// function toggleIrritated() {
//     var myIrritate = document.getElementById('irritated');
//     var displaySetting = myIrritate.style.display;
//     console.log(displaySetting);
   
//     if (displaySetting == 'block') {
//         myIrritate.style.display = 'none';
//         myIrritate.classList.add("hide");
//         myIrritate.classList.remove("show");     
//     }
//     else {
//         myIrritate.style.display = 'block';
//         myIrritate.classList.add("show");
//         myIrritate.classList.remove("hide");
    
//     }
// }

// function toggleRelax() {
//     var myRelax = document.getElementById('relax');
//     var displaySetting = myRelax.style.display;
//     console.log(displaySetting);
   
//     if (displaySetting == 'block') {
//         myRelax.style.display = 'none';
//         myRelax.classList.add("hide");
//         myRelax.classList.remove("show");     
//     }
//     else {
//         myRelax.style.display = 'block';
//         myRelax.classList.add("show");
//         myRelax.classList.remove("hide");

//     }
// }

// function toggleDare() {
//     var myDare = document.getElementById('dare');
//     var displaySetting = myDare.style.display;
//     console.log(displaySetting);
   
//     if (displaySetting == 'block') {
//         myDare.style.display = 'none';
//         myDare.classList.add("hide");
//         myDare.classList.remove("show");     
//     }
//     else {
//         myDare.style.display = 'block';
//         myDare.classList.add("show");
//         myDare.classList.remove("hide");
//     }
// }

// function toggleGloomy() {
//     var myGloomy = document.getElementById('Gloomy');
//     var displaySetting = myGloomy.style.display;
//     console.log(displaySetting);
   
//     if (displaySetting == 'block') {
//         myGloomy.style.display = 'none';
//         myGloomy.classList.add("hide");
//         myGloomy.classList.remove("show");     
//     }
//     else {
//         myGloomy.style.display = 'block';
//         myGloomy.classList.add("show");
//         myGloomy.classList.remove("hide");
//     }
// }

// function toggleExcited() {
//     var myExcited = document.getElementById('excited');
//     var displaySetting = myExcited.style.display;
//     console.log(displaySetting);
   
//     if (displaySetting == 'block') {
//         myExcited.style.display = 'none';
//         myExcited.classList.add("hide");
//         myExcited.classList.remove("show");     
//     }
//     else {
//         myExcited.style.display = 'block';
//         myExcited.classList.add("show");
//         myExcited.classList.remove("hide");
//     }
// }

// function toggleCheerful() {
//     var myCheer = document.getElementById('cheerful');
//     var displaySetting = myCheer.style.display;
//     console.log(displaySetting);
   
//     if (displaySetting == 'block') {
//         myCheer.style.display = 'none';
//         myCheer.classList.add("hide");
//         myCheer.classList.remove("show");     
//     }
//     else {
//         myCheer.style.display = 'block';
//         myCheer.classList.add("show");
//         myCheer.classList.remove("hide");
//     }
// }

// function toggleDate() {
//     var myDate = document.getElementById('date');
//     var displaySetting = myDate.style.display;
//     console.log(displaySetting);
   
//     if (displaySetting == 'block') {
//         myDate.style.display = 'none';
//         myDate.classList.add("hide");
//         myDate.classList.remove("show");     
//     }
//     else {
//         myDate.style.display = 'block';
//         myDate.classList.add("show");
//         myDate.classList.remove("hide");
//     }
// }




async function genreRequest(genre){
    await $.ajax("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=" + genre, {
    "method": "GET",
    "headers": {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
    }
    })
    .then(async response2 => {
    console.log(response2[0]);

        let title = response2[8].split("/")
        await $.ajax("https://imdb8.p.rapidapi.com/title/get-details?tconst="+ title[2] +"&limit=25&region=US", {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
            }
        })
        .then(response3 => {
            console.log(response3);
            var movieTitle = response3.title
            console.log (movieTitle);
            var movieTitleEl = document.querySelector(".card-title");
            movieTitleEl.textContent = movieTitle
            var movieImage = response3.image.url
            console.log(movieImage);
            var movieImageEl = document.querySelector(".cardImage");
            movieImageEl.setAttribute("src", movieImage)
        })
        .catch(err => {
            console.error(err);
        });
    })
    .catch(err => {
    console.error(err);
});
}


// Only shows on the webpage 2 at a time. Will work on time delay process with bryan
// genreRequest("/chart/popular/genre/family"); // Harry Potter and the Sorcerer's Stone
// genreRequest("/chart/popular/genre/musical"); //Sing
// genreRequest("/chart/popular/genre/comedy"); //Love Hard
// genreRequest("/chart/popular/genre/mystery"); //Midsommar
// genreRequest("/chart/popular/genre/thriller"); // Jurassic World: Dominion
// genreRequest("/chart/popular/genre/drama"); // The Humans
// genreRequest("/chart/popular/genre/fantasy"); // A Boy Called Christmas
// genreRequest("/chart/popular/genre/history"); //The Courier
// genreRequest("/chart/popular/genre/horror"); //The Black Phone
// genreRequest("/chart/popular/genre/sci-fi"); // The Matrix Resurrections
// genreRequest("/chart/popular/genre/action"); //The Matrix Resurrections
// genreRequest("/chart/popular/genre/animation"); // The polar express
// genreRequest("/chart/popular/genre/adventure"); //Encanto
// genreRequest("/chart/popular/genre/romance"); //a castle for christmas

// var genre = "/chart/popular/genre/comedy";

//     $.ajax("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=" + genre, {
//     "method": "GET",
//     "headers": {
//     "x-rapidapi-host": "imdb8.p.rapidapi.com",
//     "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
//     }
//     })
//     .then(response2 => {
//     console.log(response2[0]);

//         let title = response2[8].split("/")
//         $.ajax("https://imdb8.p.rapidapi.com/title/get-details?tconst="+ title[2] +"&limit=25&region=US", {
//             "method": "GET",
//             "headers": {
//             "x-rapidapi-host": "imdb8.p.rapidapi.com",
//             "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
//             }
//         })
//         .then(response3 => {
//             console.log(response3);

//         })
//         .catch(err => {
//             console.error(err);
//         });
//     })


//     var genre = "/chart/popular/genre/thriller";

//     $.ajax("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=" + genre, {
//     "method": "GET",
//     "headers": {
//     "x-rapidapi-host": "imdb8.p.rapidapi.com",
//     "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
//     }
//     })
//     .then(response2 => {
//     console.log(response2[0]);

//         let title = response2[8].split("/")
//         $.ajax("https://imdb8.p.rapidapi.com/title/get-details?tconst="+ title[2] +"&limit=25&region=US", {
//             "method": "GET",
//             "headers": {
//             "x-rapidapi-host": "imdb8.p.rapidapi.com",
//             "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
//             }
//         })
//         .then(response3 => {
//             console.log(response3);

//         })
//         .catch(err => {
//             console.error(err);
//         });
//     })

//     var genre = "/chart/popular/genre/mystery";

//     $.ajax("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=" + genre, {
//     "method": "GET",
//     "headers": {
//     "x-rapidapi-host": "imdb8.p.rapidapi.com",
//     "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
//     }
//     })
//     .then(response2 => {
//     console.log(response2[0]);

//         let title = response2[8].split("/")
//         $.ajax("https://imdb8.p.rapidapi.com/title/get-details?tconst="+ title[2] +"&limit=25&region=US", {
//             "method": "GET",
//             "headers": {
//             "x-rapidapi-host": "imdb8.p.rapidapi.com",
//             "x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
//             }
//         })
//         .then(response3 => {
//             console.log(response3);

//         })
//         .catch(err => {
//             console.error(err);
//         });
//     })

