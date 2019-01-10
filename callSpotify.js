var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

function callSpotify(song) {
  if (song !== undefined) {
    trackName = song;
  } else {
    trackName = "The Sign Ace of Base";
  }
  spotify.search({ type: "track", query: trackName }, function(err, data) {
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
    console.log("============ Spotify details are here ============");
    logToFile("============ Spotify details are here ============");
    console.log("Name of the Artist(s): " + artistNames);
    logToFile("Name of the Artist(s): " + artistNames);
    console.log("Name of the Song: " + songName);
    logToFile("Name of the Song: " + songName);
    console.log("Song Link: " + previewLink);
    logToFile("Song Link: " + previewLink);
    console.log("Name of the Album: " + albumName);
    logToFile("Name of the Album: " + albumName);
    console.log(" ");
    logToFile(" ");
  });
}

module.exports = callSpotify;
