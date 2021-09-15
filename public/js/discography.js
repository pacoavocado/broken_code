const newAlbumHandler = async (event) => {
    event.preventDefault();
  
    const album = document.querySelector('#album-name').value.trim();
    const date = document.querySelector('#release-date').value.trim();
    const description = document.querySelector('#release-desc').value.trim();
  
    if (album && date && description) {
      const response = await fetch(`/api/albums`, {
        method: 'POST',
        body: JSON.stringify({ album, date, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/discography');
      } else {
        alert('Failed to create tour');
      }
    }
  };
  
  const delAlbumButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/albums/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/discogrphy');
      } else {
        alert('Failed to delete tour');
      }
    }
  };

  document
  .querySelector('.new-album-form')
  .addEventListener('submit', newAlbumHandler);

  document
  .querySelector('.new-album-form')
  .addEventListener('submit', delAlbumButtonHandler);
  