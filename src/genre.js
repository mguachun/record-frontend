class Genre {
    constructor({id, name}) {
        this.id = id;
        this.name = name;
    }

    
    renderGenre() {
        const genreSelect = document.getElementById('genre-menu');
        const genreCard = document.createElement('option');

        genreCard.text = this.name 

    
        genreSelect.appendChild(genreCard);
    };

   
  
};
