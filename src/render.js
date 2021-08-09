const baseUrl = "http://localhost:3000/genres/";
const resultsUl = document.getElementById('results');
// const button = document.getElementById('search-btn');
const albumUl = document.getElementById('album-list');
const genreUl = document.getElementById('genre-list');
const titleInput = document.getElementById('title');
const artistInput = document.getElementById('artist');
const yearInput = document.getElementById('year');
const genreInput = document.getElementById('genre');
const albumForm = document.getElementById('album-form');


//is this needed if i have an iterator method in fetch request?
const renderAlbums = (albums) => {
    albums.forEach(album => {
        renderAlbums(album);
    })
};

const renderAlbum = (album) => {
    const albumDiv = document.createElement('div');
    albumDiv.classList = "album-card";
    albumDiv.dataset.id = album.id;

    render(albumDiv, album);

    albumList.appendChild(albumDiv);
    albumList.addEventListener('click', handleAlbumClick);
};

document.addEventListener("DOMContentLoaded", () => {
    // button.addEventListener('click', searchAlbums);
    fetchGenres()
    fetchAlbums()

 });

const render = (div, album) => {
    div.innerHTML = `
    <h1 class="title">${album.title}</h1>
  <strong>Artist:</strong> 
  <p class="artist"> ${album.artist}</p>
  <strong>Year:</strong>
  <p class="year"> ${album.year}</p>
  <strong>Genre:</strong>
  <p class="genre"> ${album.genre}</p>
  <p class="book-btn"><button>Edit</button> <button>Delete</button></p>
`;
};


