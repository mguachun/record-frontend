class Genre {
    constructor(id, name) {
        this.id = id;
        this.name = name;
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