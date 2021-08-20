
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
       const deleteCard = event.target.parentNode.parentNode;

        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete Album';
        deleteBtn.addEventListener('click', () => {
            albumData.remove();
            // albumData.albumCard.albumInfo();
           
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

    renderAlbumForm() {
        let addBtnState = event.target.dataset.active;
        if (addBtnState === 'false') {
            addBtnState = 'true';
            const albumForm = document.createElement('form');

            albumForm.innerHTML = `
            <input type="text" placeholder="Album Title" />
            <input type="text" placeholder="Artist" />
            <input type="text" placeholder="Year Released" />
            <select name="genres" >
                  <option value="">Select Genre:</option>
                  <option>Rock</option>
                  <option>Jazz</option>
                  <option>Metal</option>
                  <option>Country</option>
                  <option>Hip-Hop</option>
                  <option>Pop</option>
                  <option>R&B</option>
                  <option>Punk</option>
                  <option>Soul</option>
                  <option>Disco</option>
                  <option>Folk</option>
                </select>
                <button type="submit"> Create Album </button>
            `;
            albumForm.addEventListener('submit', () => {
                addBtnState = 'false';
                this.handleSubmit();
            });
            return albumForm;
        } else {
            return null;
        };
    };

    handleSubmit = () => {
        event.preventDefault();
        const input = event.target.children[0];
        const album = {
            title: input.value,
            artist: input.value,
            year: input.value,
            genre: input.value,
            genre_id: this.id
        };
        input.value = '';
        albumApi.createAlbum(album);
        event.target.remove();
    };


};