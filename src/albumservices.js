class AlbumServices {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    };

    // Retrieve all albums from backend and append to the DOM
    fetchAlbums(){
    fetch('http://localhost:3000/albums')
    .then(resp => resp.json())
    .then(data => {
        data.forEach(album => {
          const li = document.createElement('li')
          li.innerText = album.title;
          albumUl.appendChild(li);
        })
    })
}}