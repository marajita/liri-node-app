#Project Overview

This project was an assignment in the UNC Chapel Hill FullStack Coding Program. Using the command line and Node.js users can use this to console out one information about either spotify or a movie and multiple results for the concerts.

#Technologies used

The following technologies, tools, and npm packages were used:

- Javascript
- Node.js
- NPMs packages used
  - Axios https://www.npmjs.com/package/axios
  - Spotify https://www.npmjs.com/package/node-spotify-api
  - OMDB APIs http://www.omdbapi.com
  - Band in Town APIs http://www.artists.bandsintown.com/bandsintown-api
  - Moment https://www.npmjs.com/package/moment
  - Dot env https://www.npmjs.com/package/moment

#Getting Started
You can fork this repository then download it into your computer. Once that is done you will need to create a .env file for it to work. Then navigate to the root of your project and run npm init -y — this will initialize a package.json file for your project. The package.json file is required for installing third party npm packages and saving their version numbers. If you fail to initialize a package.json file, it will be troublesome, and at times almost impossible for anyone else to run the code after forking the project. Then run npm packages.

# Band in Town

![GitHub Logo](/images/concert-this.gif)
Format: ![Alt Text](url)

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

On the command line type node liri.js then any of the following commands:

- spotify-this-song
- movie-this
- do-what-it-says
- my-tweets
  After the movie or the song commands you can type the name of the movie or song (you do not need to capitalize the words or do anything special if there multiple words in your name). Your command line could look like this for example:

node liri.js spotify-this-song fight song
node liri.js my-tweets
node liri.js movie-this aliens
Prerequisites
You will need to fork this repository and pull it to your local drive. Once this is done you will need to create a .env file with your twitter api keys and spotify keys. You will also need to install the npm packages stated in the package.json file.

#Author
Rajita - \* Javascript, Node.js

#License
None
