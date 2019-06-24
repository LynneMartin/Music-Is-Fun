export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }

    // //template info below, will show on user end
    get Template() {
        return `
        <div class="col-md-3 pt-3">
            <div class="card">
            <a onclick="app.controllers.itunesCtrl.playSong('${this.preview}')">
                <img class="card-img-top album-art" src="${this.albumArt}" alt="Card image">
                </a>

                <div class="card-body text-center">
                    <h3 class="card-title">${this.title}</h3>
                    <h5 class="card-title">${this.artist}</h5>
                    <h6 class="card-title song-album">${this.collection}</h6>

                    <div class="button-row">
                        <a href="#!" class="btn purchase-btn d-flex justify-content-center align-items-center">Buy</a>
                        <h4 class="card-title">${this.price}</h4>
                        
                        <audio class="w-75" controls src="" id="source" autoplay></audio>
                        </div>
                        </div>
                        </div>
                        </div>
        `
    }
}