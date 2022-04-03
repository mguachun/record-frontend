  //album services 
  <!-- getAlbums(){
        // let albums = []
        fetch(this.baseUrl)
        .then(resp => resp.json())  
        .then(albums => {
          
            albums.forEach(album => {
                const newAlbum = new Album(album) 
                // if (albumName.length > 3) {
                // albums.push(newAlbum)
                // console.log(newAlbum)
                newAlbum.renderAlbum();
            // }
            })
        })
        // return albums
    }; -->
<!-- 
      <!-- // renderWordSearch() {
    //     const albumApi = new AlbumServices('http://localhost:3000/albums')
    // //    const result = albumApi.getAlbums()
    //     // const result = albumApi.getAlbums(album=> albumName.length > 3);
    // //    result.filter(album => albumName.length > 3);
    //     // let albums = []
    //     const listAlbums = ["The Dark Side of the Moon", "Born in the U.S.A", "Nevermind", "Purple Rain", 
    //     "The Miseducation of Lauryn Hill", "Saturday Night Fever, "]
    //     listAlbums.filter(album => (album.split(" ").length) > 2)
       
        

    //     console.log(listAlbums);
    
    // } --> -->

//index.js
<!-- // const wordBtn = document.getElementById('word-button')
document.addEventListener('DOMContentLoaded', ()  => {
    albumApi.getAlbums();
    genreApi.getGenres();
    albumForm.addEventListener('submit', albumApi.postAlbum);
    // wordBtn.addEventListener('click', albumApi.renderWordSearch);

}); -->

index.html
   <!-- <button id="word-button"> Long Word Search </button> --> -->

  
   sort earliest to latest

<!-- const sortedMovies = movieList.sort((a, b) => b.release_date - a.release_date )
sortedMovies -->


// Use the months array from index.js.
// Write a function that returns only the months ending in the letter 'y'.



<!-- const months = monthsArray.filter(month => month.slice(-1) === "y")
console.log(months) -->

filter: 
<!-- const array = [1, 2, 3, 4]
const filteredArray = array.filter(element => element%2)
// array = [1, 2, 3, 4]
// filteredArray = [1, 3] -->

map: 
<!-- const array = [1, 2, 3, 4]
const mapArray = array.map(element => element * 2)
// array = [1, 2, 3, 4]
// mapArray = [2, 4, 6, 8] -->