class Album {
    constructor({id,title, artist, year}){
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.year = year;
    };

    renderAlbum = (album) => {
        const albumDiv = document.createElement('div');
        albumDiv.classList = "album-card";
        albumDiv.dataset.id = album.id;
    
        render(albumDiv, album);

        const charInfo = this.renderAlbumInfo
    
        albumList.appendChild(albuminfo);
        albumList.addEventListener('click', handleAlbumClick);
    };

    renderAlbumInfo(){
        const albumData = document.createElement('div')
        
        albumData.innerHTML = `
            <h1>${this.title}</h1>
            <p>${this.artist}</p>
            <p>${this.year}</p>
            <p>${this.genre}</p>
        `;
    }

}