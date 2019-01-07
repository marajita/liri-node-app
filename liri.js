require("dotenv").config();
var fs = require("fs");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var para = process.argv[3];
var trackName;
if (command === "spotify-this-song") {
  callSpotify();
} else if (command === "concert-this") {
  callConcertFind();
} else if (command === "movie-this") {
  callMovieFind();
} else if (command === "do-what-it-says") {
  var content;
  fs.readFile("./random.txt", "utf8", function read(err, data) {
    if (err) {
      throw err;
    }
    content = data;

    // Invoke the next step here however you like
    // Put all of the code here (not the best solution)
    contentArray = content.split(",");
    command = contentArray[0];
    para = contentArray[1].slice(1, -1);
    if (command === "spotify-this-song") {
      callSpotify();
    } else if (command === "concert-this") {
      callConcertFind();
    } else if (command === "movie-this") {
      callMovieFind();
    }
  });
}
function callSpotify() {
  if (para !== undefined) {
    trackName = para;
  } else {
    trackName = "The Sign Ace of Base";
  }
  spotify.search({ type: "track", query: trackName, limit: 1 }, function(
    err,
    data
  ) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    var artistList = data.tracks.items[0].artists;
    var artistNames = [];
    for (var i = 0; i < artistList.length; i++) {
      var artistName = artistList[i].name;
      artistNames.push(artistName);
    }
    var songName = data.tracks.items[0].name;
    var previewLink = data.tracks.items[0].preview_url;
    var albumName = data.tracks.items[0].album.name;
    console.log("Name of the artist: " + artistNames);
    console.log("Name of the song: " + songName);
    console.log("Song Link: " + previewLink);
    console.log("Name of the album: " + albumName);
  });
}
function callConcertFind() {
  var queryUrl =
    "https://rest.bandsintown.com/artists/" +
    para +
    "/events?app_id=codingbootcamp";
  axios.get(queryUrl).then(function(response) {
    var allConcerts = response.data;
    for (var i = 0; i < allConcerts.length; i++) {
      var concert = allConcerts[i];
      console.log("Name of the venue: " + concert.venue.name);
      logToFile("Name of the venue: " + concert.venue.name);
      console.log("Venue location: " + concert.venue.city);
      logToFile("Venue location: " + concert.venue.city);
      console.log(
        "Date of the Event as 'MM/DD/YYYY': " +
          moment(concert.datetime, moment.ISO_8601).format("MM/DD/YYYY")
      );
      logToFile(
        "Date of the Event as 'MM/DD/YYYY': " +
          moment(concert.datetime, moment.ISO_8601).format("MM/DD/YYYY")
      );

      console.log(
        "-----------------------------------------------------------"
      );
      logToFile("-----------------------------------------------------------");
    }
  });
}
function callMovieFind() {
  var queryUrl =
    "http://www.omdbapi.com/?t=" + para + "&y=&plot=short&apikey=trilogy";
  axios.get(queryUrl).then(function(response) {
    var ratingsLists = response.data.Ratings;
    var rottenTmt;
    for (var i = 0; i < ratingsLists.length; i++) {
      var rottenTmtSrc = ratingsLists[i].Source;
      if (rottenTmtSrc === "Rotten Tomatoes") {
        rottenTmt = ratingsLists[i].Value;
      }
    }

    console.log("Title of the movie: " + response.data.Title);
    console.log("Year the movie came out:" + response.data.Released);
    console.log("IMDB Rating of the movie: " + response.data.imdbRating);
    console.log("Rotten Tomatoes Rating of the movie: " + rottenTmt);
    console.log(
      "Country where the movie was produced: " + response.data.Country
    );
    console.log("Language of the movie: " + response.data.Language);
    console.log("Plot of the movie: " + response.data.Plot);
    console.log("Actors in the movie: " + response.data.Actors);
  });
}

function logToFile(message) {
  fs.appendFile("./log.txt", message + "\n", err => {
    if (err) throw err;
  });
}
