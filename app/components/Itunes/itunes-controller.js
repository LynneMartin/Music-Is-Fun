import ItunesService from "./itunes-service.js";

//NOTE Private
let itunesService = new ItunesService()

function drawSongs() {
  //NOTE changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(itunesService.Songs)

  let songs = itunesService.Songs
  let template = ''
  songs.forEach(song => {
    template += song.Template
  })

  document.getElementById('songs').innerHTML = template
}

// NOTE stops current song when playing a new one
let previousAudio;
document.addEventListener('play', function (e) {
  if (previousAudio && previousAudio != e.target) {
    previousAudio.pause();
  }
  previousAudio = e.target;
}, true);

// NOTE PUBLIC
class ItunesController {
  constructor() {
    //REGISTERED SUBSCRIBER
    console.log("itunes controller works")
    itunesService.addSubscriber("songs", drawSongs)
    drawSongs()
  }


  // NOTE DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }

}


export default ItunesController