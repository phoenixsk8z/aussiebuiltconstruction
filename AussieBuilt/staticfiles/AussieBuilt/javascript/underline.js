window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
});

navLinks = document.getElementsByClassName('nav-links')
navLinksText = document.getElementsByClassName('nav-link-text')
navLinksAfter = document.getElementsByClassName('nav-links::after')

//console.log(navLinks)
//console.log(navLinksText)
//console.log(navLinksAfter)

for (var count = 0; count < navLinks.length; count++) {

  console.log(count)

  var navLink = document.getElementById(`nav-link-${count}`)
  var navLinkInfo = navLink.getBoundingClientRect();
  var navLinkWidth = navLinkInfo.width;

  //console.log(navLinkWidth)
  //console.log(`offsetwidth: ${navLink.offsetWidth}`)
  //console.log(`OFFSET WIDTH: ${navLinksText[count]['offsetPosition']}`)

  navLink.style.setProperty(`--navLink${count}`, `${navLinkWidth}px`)

};