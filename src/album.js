// const albumApi = new AlbumServices('http://localhost:3000/albums');

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

        albumCard.appendChild(albumName);
        albumList.appendChild(albumCard);

        
    };


    // renderAlbum() {
    //     const li = document.createElement('li');
    //     const deleteBtn = document.createElement('button');

    //     li.innerText = this.name;

    //     deleteBtn.classList.add('delete-btn');
    //     deleteBtn.innerText = 'x';

    //     deleteBtn.addEventListener('click', () => {
    //         console.log(this, "I've been clicked!");
    //     });

    //     li.appendChild(deleteBtn);

    //     return li;

    // };
    // renderAlbumForm = () => {
    //     // let addBtnState = event.target.dataset.active;
    //     // if (addBtnState === 'false') {
    //         // addBtnState = 'true';
    //         const albumForm = document.createElement('form');
    //         albumForm.classList.add('album-form');

    //         albumForm.innerHTML = `
    //         <input type="text" placeholder="Album Title" />
    //         <input type="text" placeholder="Artist" />
    //         <input type="text" placeholder="Year Released" />
    //         <button type="submit">Create Album</button>
    //         `;
    //         albumForm.addEventListener('submit',() => {
    //             addBtnState = 'false';
    //             albumApi.handleSubmit();
    //         });
    
    //     // } else {
    //     //     return null;
    

    // };

    // renderAlbumInfo(){
    //     const albumData = document.createElement('div');

    //     albumData.innerHTML = `
    //     <h1>${this.title}</h1>
    //     <p>${this.artist}</p>
    //     <p>${this.year}</p>
    //     `;

    //     return albumData;

    // };
};