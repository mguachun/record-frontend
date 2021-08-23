const albumApi = new AlbumServices('http://localhost:3000/albums')
const genreApi = new GenreServices('http://localhost:3000/genres')
const albumForm = document.getElementById('album-form');
document.addEventListener('DOMContentLoaded', ()  => {
    albumApi.getAlbums();
    genreApi.getGenres();
    albumForm.addEventListener('submit', albumApi.postAlbum);

});














//  document.addEventListener('DOMContentLoaded', () => {
//     fetchAlbums();
//     albumForm.addEventListener('submit', postAlbum);
//   });
 
//   const handleAlbumClick = () => {
//     const albumContainer = event.target.parentElement.parentElement;
//     const albumId = albumContainer.dataset.id;
//     const eventButton = event.target;
  
//     switch(eventButton.innerText) {
//       case 'Delete': 
//         deleteAlbum(albumId, albumContainer);
//         break;
//       case 'Save':
//         eventButton.innerText = 'Edit';
//         editAlbum(albumId, albumContainer);
//         break;
//       default: 
//         console.log('No changes were made.');
//         break;
//     };
  
//   };



