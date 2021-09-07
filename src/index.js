const albumApi = new AlbumServices('http://localhost:3000/albums')
const genreApi = new GenreServices('http://localhost:3000/genres')
const albumForm = document.getElementById('album-form');

document.addEventListener('DOMContentLoaded', ()  => {
    albumApi.getAlbums();
    genreApi.getGenres();
    albumForm.addEventListener('submit', albumApi.postAlbum);


});
















