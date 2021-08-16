const aboutSections = document.getElementsByClassName('about-sections');
const aboutText = document.getElementsByClassName('about-section-text');
const aboutImage = document.getElementsByClassName('about-section-image');
let websiteWidth = window.innerWidth;


function aboutSectionOrder() {
    
    /* IF THE WEBSITE IS RESIZED AND THE WIDTH OF THE WEBSITE IS NOW LESS THAN THE WIDTH 
    THAT ACTIVATES A SINGLE COLUMN LAYOUT FOR THE ABOUT SECTIONS. 
    THEN CHANGE ALL THE EVEN NUMBERED ABOUT SECTIONS SUB ELEMENTS
    TO THE SAME ORDER AS THE SUB ELEMENTS OF THE ODD NUMBERED ABOUT SECTIONS.
    
    EXAMPLE OF WHAT THE ABOUT SECTIONS GRID LAYOUT LOOKS LIKE: 
        [IMAGE]
        [TEXT]
        [IMAGE]  */
        
    if(websiteWidth < 651) {
        for (var count = 1; count < aboutSections.length; count = count + 2) {
            aboutText[count].style.order = 2;
            aboutImage[count].style.order = 1;
        };
    } 


    /* IF THE WEBSITE IS RESIZED AND THE WIDTH OF THE WEBSITE IS NOW GREATER THAN THE WIDTH 
    THAT ACTIVATES A DUAL COLUMN LAYOUT FOR THE ABOUT SECTIONS. 
    THEN CHANGE ALL THE EVEN NUMBERED ABOUT SECTIONS SUB ELEMENTS
    TO AN ALTERNATING ORDER AS THE SUB ELEMENTS OF THE ODD NUMBERED ABOUT SECTIONS.
    
    EXAMPLE OF WHAT THE ABOUT SECTIONS GRID LAYOUT LOOKS LIKE:
        [IMAGE, TEXT]
        [TEXT, IMAGE]
        [IMAGE, TEXT]  */
    
    else {
        for (var count = 1; count < aboutSections.length; count = count + 2) {
            aboutText[count].style.order = 1;
            aboutImage[count].style.order = 2;
        };
    }
}

/* ON THE WEBSITES INITIAL LOAD CALL THE aboutSectionOrder function */
aboutSectionOrder()


/* IF THE WEBSITE IS RESIZED CALL THE aboutSectionOrder function */
window.addEventListener("resize", function() {

    /* UPDATE THE CURRENT WIDTH OF THE WEBSITE WHEN IT'S RESIZED */
    websiteWidth = window.innerWidth;

    aboutSectionOrder()

});