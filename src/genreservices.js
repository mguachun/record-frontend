class GenreServices {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    };


    getGenres() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(genres => {
            console.log(genres)
            genres.forEach(genre => {
                const newGenre = new Genre(genre)
                newGenre.renderGenre();
            })
        })
    };
};

