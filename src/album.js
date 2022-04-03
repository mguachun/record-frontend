
class Album {

    static all = [];
    constructor({ artist, genre_id, year, genre, title, id}){
        this.artist = artist;
        this.genre_id = genre_id;
        this.year = year;
        this.genre = genre;
        this.title = title;
        this.id = id;
        Album.all.push(this);
    };

    renderAlbum() {
        const albumList = document.getElementById('album-list');
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');
        albumCard.classList.add('div');

        const albumName = document.createElement('h1');
        albumName.innerText = this.title;


      const albumInfo = this.renderAlbumInfo();
      albumInfo.classList.add('toggleInfo');

      albumCard.appendChild(albumName);
        albumCard.appendChild(albumInfo);


        albumInfo.children[3].addEventListener('click', () => {
           
            albumInfo.parentElement.remove();
             albumApi.deleteAlbum(this.id);
        })
     
    
        albumName.addEventListener('click', () => {

            if (albumInfo.classList.contains('toggleInfo')) {
            console.log("click made");
            albumInfo.classList.remove('toggleInfo') 
        } else {
            albumInfo.classList.add('toggleInfo');
            console.log("data hidden");
        }
       })

        albumList.appendChild(albumCard);

    };

    renderAlbumInfo(){

        const deleteBtn = document.createElement('button');
        const albumData = document.createElement('div');
     
        albumData.classList.add('albumData');

    
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete Album';

     

        albumData.innerHTML = `
        <br>
        <p>Artist: ${this.artist}</p>
        <p>Year Released:${this.year}</p>
        <p>Genre: ${this.genre.name}</p>
        <br>
        `;
        albumData.appendChild(deleteBtn);
        return albumData;
    
    };

    static search(event) {
        event.preventDefault();
        // const query = Album.all.filter(album => album.id > 20);

        const searchForm = document.getElementById('query');
        console.log(searchForm.value);


        const filterAlbums = Album.all.filter(album => album.title.includes(searchForm.value));
        console.log(filterAlbums);

        const deleteList = document.getElementById('album-list');
        deleteList.innerHTML = ' ';

        filterAlbums.forEach(album => {
        
            album.renderAlbum();
        })

    

    }

    
    

};



// add a search bar that allows albums to be searched by title

// create an input for search
// add an event listener to input 
// define callback function 
    // filter Album.all with search term
    // remove all albums from the dom
    // update with new list of albums