const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/signup');
      } else {
        alert(response.statusText);
      }
    }
  };

  const delUserButtonHandler = async (event) => {
    console.log('yo')
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/signup');
      } else {
        alert('Failed to delete user');
      }
    }
  };
  
  
  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
 
 let deleteButton = document
  .querySelectorAll('.user-list');
  if (deleteButton){
    deleteButton.forEach(el => {
      
      el.addEventListener('click', delUserButtonHandler);
    });
  }
