class Genre {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    // Retrieve all genres from backend and append to the DOM
     fetchGenres(){
    fetch('http://localhost:3000/genres')
    .then(resp => resp.json())
    .then(data => {
        data.forEach(genre => {
        //   console.log(genre.name)
        const li = document.createElement('li')
        li.innerText = genre.name;
        genreUl.appendChild(li);
        })
    })
}

    renderGenre() {
        const genreCard = document.createElement('div');
        genreCard.classList.add('album-card');

        const genreInfo = this.renderGenreInfo();
        const albums = this.renderAlbumGenres();

        genreCard.appendChild(genreInfo);
        genreCard.appendChild(genres);
        Genre.container.appendChild(genreCard);
    };

    renderGenreInfo() {
        const genreData = document.createElement('div');

        genreData.innerHTML = `
        <h1>${this.name}</h1>
        `;

        return genreData;
    };

    renderAlbumGenres() {
        const albumUl = document.createElement('ul');
        albumUl.classList.add('albums');

        this.albums.forEach(album => {
            const newAlbum = new Album(album);
            const li = newAlbum.renderAlbum();
        });
    };
};