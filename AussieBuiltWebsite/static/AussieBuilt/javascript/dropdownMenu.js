window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
});

const toggleMenuButton = document.getElementsByClassName('toggle-menu-button')[0];
const navLinksContainer = document.getElementById('nav-links-container');
const navBar = document.getElementById('nav-bar');

toggleMenuButton.addEventListener('click', () => {

  if(navLinksContainer.classList.contains("active")) {
      navLinksContainer.style.animation = "fade-out 1s"
  } else {
      navLinksContainer.style.animation = "fade-in 1s"
  }

  navLinksContainer.classList.toggle('active')
  navBar.classList.toggle('activeNavBar')
  toggleMenuButton.classList.toggle('burger-menu-open')

})