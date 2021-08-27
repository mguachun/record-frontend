class AlbumServices {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    };

    getAlbums(){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(albums => {
            console.log(albums)
            albums.forEach(album => {
                const newAlbum = new Album(album)
                newAlbum.renderAlbum();

            })
        })
    };

    deleteAlbum(id){
        const config = {
            method: 'DELETE'
        }
        fetch(`${this.baseUrl}/${id}`, config)
        .then(resp => resp.json())
        .then(data => console.log(data.message))

    };

    postAlbum = () => {
        const albumForm = document.getElementById('album-form');
        const titleInput = document.getElementById('title');
        const artistInput = document.getElementById('artist');
        const yearInput = document.getElementById('year');
        const genreInput = document.getElementById('genre-menu');

        event.preventDefault();
 
        const albumData = {
            title: titleInput.value,
            artist: artistInput.value,
            genre_id: genreInput.value,
            year: yearInput.value
        };

        const configObj = {
            method: 'POST',
             headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(albumData)
                
        };

        fetch(this.baseUrl, configObj)
        .then(resp => resp.json())
        .then(album => {
         
            const newAlbum = new Album(album)
            newAlbum.renderAlbum();
            albumForm.reset();
        });
    }
    }

    

    