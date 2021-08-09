const baseUrl = "http://localhost:3000/genres/";
const albumInfo = document.querySelector('.right');

const resultsUl = document.getElementById('results');
const button = document.getElementById('search-btn');
const infoContainer = document.getElementById('info');


function fetchAlbums(query) {
    console.log("I'm fetching.")
}

function splitQuery(query){
    return query.replace(' ', '+');
};

document.addEventListener("DOMContentLoaded", () => {
    button.addEventListener('click', searchAlbums);
 });

 fetchAlbums('something')

// const fetchGenres = async () => {
//     const genresFetch = await fetch(baseUrl);
//     const authors = await genresFetch.json();
//     console.log()
    
// }

// do i need to use an API for this or is localhost ok?