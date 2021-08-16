
class Album {
    constructor({ artist, genre_id, year, genre, title }){
        this.artist = artist;
        this.genre_id = genre_id;
        this.year = year;
        this.genre = genre;
        this.title = title;
    };

    renderAlbum() {
        const  albumList = document.getElementById('album-list');
        const albumCard = document.createElement('div');

        albumCard.classList.add('album-card');

        const albumName = document.createElement('h1');
        albumName.innerText = this.title;

        // const albumInfo = this.renderAlbumInfo();
      
        // albumCard.appendChild(albumInfo); //renders album info 
   

        albumCard.appendChild(albumName);
       albumName.addEventListener('click', ()=>{
        //    console.log("Clicked!")
        // this.renderAlbumInfo()
        albumCard.appendChild(this.renderAlbumInfo());
    
        
       })

       
        albumList.appendChild(albumCard);
       
        
    };

    renderAlbumInfo(){

        const albumData = document.createElement('div');

        albumData.innerHTML = `
        <p>Artist: ${this.artist}</p>
        <p>Year Released:${this.year}</p>
        <p>Genre: ${this.genre.name}</p>
        `;
        return albumData;



    };
    // deleteAlbum(id){
    //     const config = {
    //         method: 'DELETE'
    //     }
    //     fetch(`${this.baseUrl}/${id}`, config)
    //     .then(resp => resp.json())
    //     .then(data => console.log(data.message))

    // };

};