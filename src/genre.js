class Genre {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    
    renderGenre() {
        // debugger
        const genreSelect = document.getElementById('genre-menu');
        const genreCard = document.createElement('option');

        genreCard.text = this.name 
        genreCard.innerHTML= 
        // this.name = $(input[this.name]);
        // genreCard.value = this.name

        // genreCard.options.add(option)

        // genreCard.classList.add('genre-card');

        // const genreName = document.createElement('h1');
        // genreName.innertext = this.name;

        // genreCard.appendChild(genreName);
        // genreName.addEventListener('click', ()=>{
          
        // })
        genreSelect.appendChild(genreCard);
    };

   
  
};
