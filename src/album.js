
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
        // const albumInfo = this.renderAlbumInfo();
        // albumCard.appendChild(albumInfo); //renders album info

      const albumInfo = this.renderAlbumInfo();
      albumInfo.classList.add('toggleInfo');

    
        albumCard.appendChild(albumName);
        albumCard.appendChild(albumInfo);
        // albumCard.appendChild(this.renderAlbumInfo());

    
        albumName.addEventListener('click', () => {

            if (albumInfo.classList.contains('toggleInfo')) {
            console.log("click made");
            albumInfo.classList.remove('toggleInfo') 
        } else {
            albumInfo.classList.add('toggleInfo');
            console.log("data hidden");
        }
       })
        // this.renderAlbumInfo()
        // albumCard.appendChild(this.renderAlbumInfo());

        albumList.appendChild(albumCard);

    };

    renderAlbumInfo(){

        const deleteBtn = document.createElement('button');
        const albumData = document.createElement('div');
     
    //    const deleteCard = event.target.parentElement
    
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete Album';

        deleteBtn.addEventListener('click', () => {
            // albumData.remove();
            deleteCard.remove();
            
            albumApi.deleteAlbum(this.id);
        });
     

        albumData.innerHTML = `
        <p>Artist: ${this.artist}</p>
        <p>Year Released:${this.year}</p>
        <p>Genre: ${this.genre.name}</p>
        `;
        albumData.appendChild(deleteBtn);
        return albumData;
    
    };
};
