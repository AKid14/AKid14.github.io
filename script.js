document.addEventListener('DOMContentLoaded', () => {
    const placesBtn = document.getElementById('placesBtn');
    const thingsBtn = document.getElementById('thingsBtn');
    const subBar = document.getElementById('subBar');
    const darkModeToggle = document.getElementById('darkModeToggle');

    let subBarVisible = false;

    placesBtn.addEventListener('click', () => {
      subBarVisible = !subBarVisible;
      subBar.style.display = subBarVisible ? 'block' : 'none';
    });
    
    thingsBtn.addEventListener('click', () => {
      subBarVisible = false;
      subBar.style.display = 'none';
    });
  
    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
  });
  