//make skeleton html, css and js file
//link jquery, bootstrap(tailwind?)

var moodTypes = {
    happy: ['pizza', 'food type 2'],
    sad: ['food type 1', 'food type 2', 'food type 3'],
    deptressed: ['food type 1']
}

// create hero section with title and site description
// create interface for getting user mood (i.e. dropdown? or user enters)
// take user mood input value
// get that value to fetch set genres we made for that mood
// utlize the second fetch with tt code to set it
// do the same for food recipes API
// what data points are we going to keep? posters? details form the fetch request. how to render those in our html

fetch("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=%2Fchart%2Fpopular%2Fgenre%2Fhorror", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
	}
})
.then(response => response.json())
.then(data =>   
	console.log(data)
)
.catch(err => {
	console.error(err);
});

// "/title/tt10872600/"
fetch("https://imdb8.p.rapidapi.com/title/get-details?tconst=tt9639470", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "6367609f03mshe6a3e9c1f4e6ba0p12185cjsn01a783ae2181"
	}
})

.then(response => response.json())
.then(data =>   
	console.log(data)
)
.catch(err => {
	console.error(err);
});