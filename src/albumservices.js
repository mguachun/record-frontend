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
        // debugger
        const albumData = {
            title: titleInput.value,
            artist: artistInput.value,
            genre_id: genreInput.value,
            year: yearInput.value
        };
            // debugger
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
            // renderAlbum(album);
            const newAlbum = new Album(album)
            newAlbum.renderAlbum();
            albumForm.reset();
        });
    }
    }

    

    // scrapeAlbumData = (albumForm) => {
    //     const title = form.elements['title'];
    //     const artist = form.elements['artist'];
    //     const year = form.elements['year'];
    //     const genre = form.elements['genre-menu'];
    //     const form = document.getElementById('album-form')
    //     debugger
    //     let inputTitle = title.value;
    //     let inputArtist = artist.value;
    //     let inputYear = year.value;
    //     let inputGenre = genre-menu.value;

    //     form.addEventListener('submit', event => {
    //         event.preventDefault();
    //         console.log("clicked!!!")}
    //         // let inputTitle = hasValue(form.element["name"]);
    //         // let inputArtist = hasValue(form.element["artist"]);
    //         // let inputYear = hasValue(form.element["year"]);
    //         // let inputGenre = hasValue(form.element["genre"]);

    //     })
    //     }
  

 
 


