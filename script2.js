document.addEventListener('DOMContentLoaded', () => {
    const isPopupShown = localStorage.getItem('popupShown');
  
    if (!isPopupShown) {
      setTimeout(() => {
        document.getElementById('popup').style.display = 'block';
      }, 2000);
    }
  
    document.getElementById('login').addEventListener('click', () => {
      document.getElementById('popup').style.display = 'none';
      localStorage.setItem('popupShown', true);
    });
  });
  