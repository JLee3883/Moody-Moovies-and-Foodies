
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



var genre = "/chart/popular/genre/family";

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

        })
        .catch(err => {
            console.error(err);
        });
    })
    .catch(err => {
    console.error(err);
});
}
genreRequest("/chart/popular/genre/family");
genreRequest("/chart/popular/genre/musical");
// genreRequest("/chart/popular/genre/comedy");
// genreRequest("/chart/popular/genre/mystery");
// genreRequest("/chart/popular/genre/thriller");
// genreRequest("/chart/popular/genre/drama");
// genreRequest("/chart/popular/genre/mystery");
// genreRequest("/chart/popular/genre/mystery");



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

// var genre = "/chart/popular/genre/fantasy";

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

// var genre = "/chart/popular/genre/history";

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

//     var genre = "/chart/popular/genre/horror";

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