// Create a new album and append it to the DOM
const postAlbum = () => {
    event.preventDefault();

    const formData = {
        title: titleInput.value,
        artist: artistInput.value,
        year: yearInput.value,
        genre: genreInput.value
    };

    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    //method="POST" action="/albums"
    fetch(baseUrl, configObj)
    .then(resp => resp.json())
    .then(book => {
        renderAlbum(album);
        albumForm.reset();
    });
};

// Delete an album and remove it from the DOM.
const deleteAlbum = (id, albumEl) => {
    const configObj = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    };
  
    fetch(`${baseUrl}/${id}`, configObj)
    albumEl.remove();
  };
