class GenreServices{
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    };
     //retrieve all genres from back end and append to the DOM
     fetchGenres(){
        fetch('http://localhost:3000/genres')
        .then(resp => resp.json())
        .then(data => {
            data.forEach(genre => {
            //   console.log(genre.name)
            const li = document.createElement('li')
            li.innerText = genre.name;
            genreUl.appendChild(li);
            })
        })
    }
}