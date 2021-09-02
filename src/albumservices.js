class AlbumServices {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    };

    getAlbums(){
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

    renderWordSearch() {
        const albumApi = new AlbumServices('http://localhost:3000/albums')
    //    const result = albumApi.getAlbums()
        // const result = albumApi.getAlbums(album=> albumName.length > 3);
    //    result.filter(album => albumName.length > 3);
        // let albums = []
        const listAlbums = ["The Dark Side of the Moon", "Born in the U.S.A", "Nevermind", "Purple Rain", 
        "The Miseducation of Lauryn Hill"]
        listAlbums.filter( album => albumName.length > 3);

        console.log(listAlbums);
    
    }
    }

    

    