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
        // FIXME add bootstrap popover to title and collection
        return `
        <div style="padding: 1rem;" class="col-4">
            <div style="background-color: rgba(217, 217, 217)" class="card">
            <h2 class ="card-title">Artist: ${this.artist}</h2>
            <h3 class ="card-subtitle text-truncate">Title: ${this.title}</h3><br>
            <h4 class = "card-subtitle text-truncate">Collection: ${this.collection}</h4><br>
            <img style="width: 5.9rem;" src="${this.albumArt}" alt="Album Art"><br>
            <h4 class ="card-subtitle">Price: ${this.price}</h4>
            <audio controls style="width: 275px; height: 35px;">
            <source src="${this.preview}"></audio>
            </div>
        </div>
        `
    }
}