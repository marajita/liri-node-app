# Project Overview

This project was an assignment in the UNC Chapel Hill FullStack Coding Program. Using the command line and Node.js users can use this to console out one information about either spotify or a movie and multiple results for the concerts.

# Technologies used

The following technologies, tools, and npm packages were used:

- Javascript
- Node.js
- NPMs packages used
  - fs Node
  - Axios https://www.npmjs.com/package/axios
  - Spotify https://www.npmjs.com/package/node-spotify-api
  - OMDB APIs http://www.omdbapi.com
  - Band in Town APIs http://www.artists.bandsintown.com/bandsintown-api
  - Moment https://www.npmjs.com/package/moment
  - Dot env https://www.npmjs.com/package/moment

# Getting Started

You can fork this repository then download it into your computer. Once that is done you will need to create a .env file for it to work. Then navigate to the root of your project and run npm init -y — this will initialize a package.json file for your project. The package.json file is required for installing third party npm packages and saving their version numbers. If you fail to initialize a package.json file, it will be troublesome, and at times almost impossible for anyone else to run the code after forking the project. Then run npm packages.

On the command line type node liri.js then any of the following commands:

- spotify-this-song
- concert-this
- movie-this
- do-what-it-says

  After the movie or the song commands, you can type the name of the movie or song with a quotation mark(you do not need to capitalize the words or do anything special if there multiple words in then chosen names). If you don't type the name of the movie, the program will output data for the movie 'Mr. Nobody." For the song, if no song is provided then program will default to "The Sign" by Ace of Base. Your command line could look like this for example:

# Spotify-this-song

![GitHub Logo](/images/spotify.gif)

# Concert-this

![GitHub Logo](/images/concert-this.gif)

# movie-this

![GitHub Logo](/images/movie-this.gif)

For do-what-it-says-command, the program will take the text inside of random.txt and then use it to call one of LIRI's commands. For example:

# do-what-it-says (movie)

![GitHub Logo](/images/do-what-movie.gif)

# do-what-it-says (spotify)

![GitHub Logo](/images/do-what-spotify.gif)

# Author
Rajita - \* Javascript, Node.js

# License
None
