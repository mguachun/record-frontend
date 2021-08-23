class Genre {
    constructor({id, name}) {
        this.id = id;
        this.name = name;
    }

    
    renderGenre() {
        const genreSelect = document.getElementById('genre-menu');
        const genreCard = document.createElement('option');

        genreCard.text = this.name 

        genreCard.value = this.id;



    
        genreSelect.appendChild(genreCard);
    };

   
  
};
