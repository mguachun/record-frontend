class AlbumServices {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    };

    deleteAlbum(id) {
        const config = {
            method: 'DELETE'
        };
        fetch(`${this.baseUrl}/${id}`, config)
        .then(resp => resp.json())
        .then(data => console.log(data.message))
    };

    createAlbum(album){
        const confic = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(album)
        };

        fetch(this.baseUrl, config)
        .then(resp => resp.json())
        .then(data => {
            const newAlbum = new Album(data);
            const genreLi = document.getElementById(`list-${newAlbum.genre_id}`);
            genreLi.appendChild(newAlbum.renderAlbum());
        });
    };

    renderAlbumForm = () => {
        let addBtnState = event.target.dataset.active;
        if (addBtnState === 'false') {
            addBtnState = 'true';
            const albumForm = document.createElement('form');
            albumForm.classList.add('album-form');

            albumForm.innerHTML = `
            <input type="text" placeholder="Album Title" />
            <input type="text" placeholder="Artist" />
            <input type="text" placeholder="Year Released" />
            // <input type="text" placeholder="Genre" />
            <button type="submit>Create Album</button>
            `;
            albumForm.addEventListener('submit',() => {
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
            artist: this.artist,
            year: this.year
        };
        input.value = '';
        albumApi.createAlbum(album);
        event.target.remove
        
    };


};
  // the fetch doesn't work in here 
    // function fetchAlbums(){
    // fetch('http://localhost:3000/albums')
    // .then(resp => resp.json())
    // .then(data => {
    //     data.forEach(album => {
    //       const li = document.createElement('li')
    //       li.innerText = album.title;
    //       albumUl.appendChild(li);
    //     })
    // })
    // }