// Retrieve all genres from backend and append to the DOM
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

// Retrieve all albums from backend and append to the DOM
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

// // Create a new album and append it to the DOM
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

//     //method="POST" action="/albums"
//     fetch(baseUrl, configObj)
//     .then(resp => resp.json())
//     .then(book => {
//         renderAlbum(album);
//         albumForm.reset();
//     });
// };

// // Delete an album and remove it from the DOM.
// const deleteAlbum = (id, albumEl) => {
//     const configObj = {
//       method: 'DELETE',
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       }
//     };
  
//     fetch(`${baseUrl}/${id}`, configObj)
//     albumEl.remove();
//   };

// function splitQuery(query){
//     return query.replace(' ', '+');
// };