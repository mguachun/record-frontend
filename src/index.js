// const baseUrl = "http://localhost:3000/genres/";
// const resultsUl = document.getElementById('results');
// // const button = document.getElementById('search-btn');
// const albumUl = document.getElementById('album-list');
// const genreUl = document.getElementById('genre-list');


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
        deleteAlbum(albumId, bookContainer);
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

// //create a new album and append it to the DOM
// const postAlbum = () => {
//     event.preventDefault();
//     const formData = {
//         title: titleInput.value,
//         artist: artistInput.value,
//         year: yearInput.value,
//         genre: genreInput.value
//     };

//     const configObj = {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(formData)
//     };

//     fetch(baseUrl, configObj)
//     .then(resp => resp.json())
//     .then(book => {
//         renderAlbum(album);
//         albumForm.reset();
//     });
// };

// function splitQuery(query){
//     return query.replace(' ', '+');
// };

// document.addEventListener("DOMContentLoaded", () => {
//     // button.addEventListener('click', searchAlbums);
//     fetchGenres()
//     fetchAlbums()

//  });