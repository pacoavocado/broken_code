const newAlbumHandler = async (event) => {
    event.preventDefault();
  
    const album = document.querySelector('#album-name').value.trim();
    const date = document.querySelector('#release-date').value.trim();
    const description = document.querySelector('#release-desc').value.trim();
  
    if (album && date && description && showDate) {
      const response = await fetch(`/api/tours`, {
        method: 'POST',
        body: JSON.stringify({ album, date, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create tour');
      }
    }
  };
  
  document
  .querySelector('.new-album-form')
  .addEventListener('submit', newAlbumHandler);
