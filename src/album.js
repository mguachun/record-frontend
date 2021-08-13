const albumApi = new AlbumServices('http://localhost:3000/albums');

class Album {
    static container = document.getElementById('album-attr-list');
    constructor({ id, title, artist, year, genre_id }) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.year = year;
        // this.genre = genre;
        this.genre_id = genre_id
    };

    renderAlbum() {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');

        li.innerText = this.name;

        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'x';

        deleteBtn.addEventListener('click', () => {
            console.log(this, "I've been clicked!");
        });

        li.appendChild(deleteBtn);

        return li;

    };

    renderAlbumInfo(){
        const albumData = document.createElement('div');

        albumData.innerHTML = `
        <h1>${this.title}</h1>
        <p>${this.artist}</p>
        <p>${this.year}</p>
        `;

        return albumData;

    };
};