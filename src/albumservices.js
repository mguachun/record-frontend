
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
};
