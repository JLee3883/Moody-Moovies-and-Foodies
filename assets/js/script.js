
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

function toggletense() {
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
      myTense.style.display = 'block';
      myTense.classList.add("show");
      myTense.classList.remove("hide");
    //   tenseButton.innerHTML = 'Hide tense cards';
    }
}


// var genre = "/chart/popular/genre/family";

// async function genreRequest(genre){
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

//         })
//         .catch(err => {
//             console.error(err);
//         });
//     })
//     .catch(err => {
//     console.error(err);
// });
// }
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

