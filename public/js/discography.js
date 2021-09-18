const newAlbumHandler = async (event) => {
    event.preventDefault();
  
    const album_name = document.querySelector('#album-name').value.trim();
    const date = document.querySelector('#release-date').value.trim();
    const description = document.querySelector('#release-desc').value.trim();
  
    if (album_name && date && description) {
      const response = await fetch(`/api/albums`, {
        method: 'POST',
        body: JSON.stringify({ album_name , release_date: date, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/discography');
        document.location.replace('/albuminput');
      } else {
        alert('Failed to create album');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/albums/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/albuminput');
      } else {
        alert('Failed to delete album');
      }
    }
  };

  document
  .querySelector('.new-album-form')
  .addEventListener('submit', newAlbumHandler);

  document
  .querySelector('.album-list')
  .addEventListener('submit', delButtonHandler);
  