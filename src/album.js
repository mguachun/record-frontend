
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
      
        albumCard.appendChild(albumName);
       albumName.addEventListener('click', ()=>{
        // this.renderAlbumInfo()
        albumCard.appendChild(this.renderAlbumInfo());
    
        
       });
        albumList.appendChild(albumCard);

    };

    renderAlbumInfo(){

        const deleteBtn = document.createElement('button');
        const albumData = document.createElement('div');
       const deleteCard = event.target.parentElement

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

    toggleAlbumInfo() {
        const toggle  = document.getElementById(div);
        const albumCard = document.createElement('div');

        toggle.style.display = ((toggle.style.display!='none') ? 'none' : 'block');
    }

 
    
};