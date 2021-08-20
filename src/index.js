const albumApi = new AlbumServices('http://localhost:3000/albums')

document.addEventListener('DOMContentLoaded', ()  => {
    albumApi.getAlbums();
});


const genreApi = new GenreServices('http://localhost:3000/genres')

document.addEventListener('DOMContentLoaded', ()  => {
    genreApi.getGenres();
});

// add event listener for adding album

// document.addEventListener('DOMContentLoaded', () => {
//     albumApi.createAlbum();
// });













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



