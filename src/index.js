const albumApi = new AlbumServices('http://localhost:3000/albums')

document.addEventListener('DOMContentLoaded', ()  => {
    albumApi.getAlbums();

});



//    albumForm.innerHTML = `
//    <input type="text" placeholder="Album Title" />
//    <input type="text" placeholder="Artist" />
//    <input type="text" placeholder="Year Released" />
//    // <input type="text" placeholder="Genre" />
//    <button type="submit>Create Album</button>
//    `;
//    albumForm.addEventListener('submit',() => {
//        addBtnState = 'false';
//        albumApi.handleSubmit();
//    });















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



