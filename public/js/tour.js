const newTourFormHandler = async (event) => {
    event.preventDefault();
  
    const venue = document.querySelector('#venue-name').value.trim();
    const location = document.querySelector('#location').value.trim();
    const description = document.querySelector('#release-desc').value.trim();
    const showDate = document.querySelector('show_date').value.trim();
  
    if (venue && location && description && showDate) {
      const response = await fetch(`/api/tours`, {
        method: 'POST',
        body: JSON.stringify({ venue, location, description, showDate }),
        // showDate above might be show_date???
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

  const delTourButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/tours/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/tour');
      } else {
        alert('Failed to delete tour');
      }
    }
  };
  
  
  document
  .querySelector('.new-tour-form')
  .addEventListener('submit', newTourFormHandler);

  document
  .querySelector('.project-list')
  .addEventListener('click', delTourButtonHandler);