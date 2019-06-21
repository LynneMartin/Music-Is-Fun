import ItunesService from "./itunes-service.js";

//Private
const itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(itunesService.Songs)

  let songs = itunesService.Songs
  let template = ''
  songs.forEach(song => {
    template + - song.getTemplate()
  });

  document.getElementById('songs').innerHTML = template
}


//PUBLIC
class ItunesController {
  constructor() {
    //REGISTERED SUBSCRIBER
    itunesService.addSubscriber('songs', drawSongs)
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }

  playSong(url) {
    let mySong = document.getElementById("playAudio")
    if (mySong.paused) {
      mySong.setAttribute("src", url);
    }
    else {
      mySong.onpause(url);
    }
  }
}


export default ItunesController