// const albumApi = new AlbumServices('http://localhost:3000/albums');

class Album {
    constructor({ artist, genre_id, year, genre, title }){
        this.artist = artist;
        this.genre_id = genre_id;
        this.year = year;
        this.genre = genre;
        this.title = title;
    };

    renderAlbum() {
        const  albumList = document.getElementById('album-list');
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');

        // const albumName = document.createElement('h1');
        // albumName.innerText = this.title;


        const albumInfo = this.renderAlbumInfo();
        // const genres = this.renderAlbumGenres();


        albumCard.appendChild(albumInfo);
        // albumCard.appendChild(genres); 
        albumList.appendChild(albumCard);
    };

    renderAlbumInfo(){
        const albumData = document.createElement('div');

        albumData.innerHTML = `
        <h1>${this.title}</h1>
        <p>Artist: ${this.artist}</p>
        // <p>Year Released:${this.year}</p>
        `;
        return albumData;
    };

    // renderAlbumGenres(){
    //     const genreUl = document.createElement('ul');
    //     genreUl.classList.add('genres');

    //     this.genres.forEach(genre => {
    //         const newGenre = new Genre(genre);
    //         const li = newGenre.renderGenre();
    //         genreUl.appendChild(li)
    //     });

    //     return genreUl;
        
    // };
};