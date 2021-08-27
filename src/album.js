
class Album {
    constructor({ artist, genre_id, year, genre, title, id}){
        this.artist = artist;
        this.genre_id = genre_id;
        this.year = year;
        this.genre = genre;
        this.title = title;
        this.id = id;
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
     
    
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete Album';

     

        albumData.innerHTML = `
        <p>Artist: ${this.artist}</p>
        <p>Year Released:${this.year}</p>
        <p>Genre: ${this.genre.name}</p>
        `;
        albumData.appendChild(deleteBtn);
        return albumData;
    
    };
};
