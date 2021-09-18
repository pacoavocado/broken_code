const newFormHandler = async (event) => {
    event.preventDefault();
  
    const venue = document.querySelector('#venue-name').value.trim();
    const location = document.querySelector('#location').value.trim();
    const description = document.querySelector('#release-desc').value.trim();
    const date = document.querySelector('show_date').value.trim();
  console.log(show_date)
    if (venue && location && description && date) {
      const response = await fetch(`/api/tours`, {
        method: 'POST',
        body: JSON.stringify({ venue, location, description, show_date: date }),
        // showDate above might be show_date???
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/tour');
        document.location.replace('/tourinput');
      } else {
        alert('Failed to create tour');
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/tours/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/tourinput');
        // document.location.replace('/tour');

      } else {
        alert('Failed to delete tour');
      }
    }
  };
  
  
  document
  .querySelector('.new-tour-form')
  .addEventListener('submit', newFormHandler);

  document
  .querySelector('.tour-list')
  .addEventListener('click', delButtonHandler);