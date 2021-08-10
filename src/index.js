 document.addEventListener('DOMContentLoaded', () => {
    fetchAlbums();
    albumForm.addEventListener('submit', postAlbum);
  });
 
  const handleAlbumClick = () => {
    const albumContainer = event.target.parentElement.parentElement;
    const albumId = albumContainer.dataset.id;
    const eventButton = event.target;
  
    switch(eventButton.innerText) {
      case 'Delete': 
        deleteAlbum(albumId, albumContainer);
        break;
      case 'Save':
        eventButton.innerText = 'Edit';
        editAlbum(albumId, albumContainer);
        break;
      default: 
        console.log('No changes were made.');
        break;
    };
  
  };


//retrieve all genres from back end and append to the DOM
function fetchGenres(){
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
//retrieve all albums from back end and append to the DOM
function fetchAlbums(){
    fetch('http://localhost:3000/albums')
    .then(resp => resp.json())
    .then(data => {
        data.forEach(album => {
          const li = document.createElement('li')
          li.innerText = album.title;
          albumUl.appendChild(li);


        })
    })
}



