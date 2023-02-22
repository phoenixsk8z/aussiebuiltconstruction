const navLinks = document.getElementsByClassName("nav-link-text");
const navLinksUnderline = document.getElementsByClassName("nav-links-text-underline-container");
currentPage = currentPage.getAttribute("data-name");

for (var i = 0, length = navLinks.length; i < length; i++ ) {
    let navLink = navLinks[i].innerHTML.toLowerCase();

    if (navLink === currentPage) {
        navLinksUnderline[i].classList.add("nav-links-current-page")
    }

};
