window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
});

const slideshowImages = document.getElementsByClassName('slideshow-img');
const slideshowContainer = document.getElementById('home-slideshow');

// COUNTER SET TO 2 BECAUSE IT'S USED TO TRANSLATE THE IMAGES & WE WANT TO START ON THE 3RD IMAGE
let counter = 2 


// GET WEBSITE WIDTH AND DEFINE TRANSLATEX 
let websiteWidth = window.innerWidth;

/* WHEN THE WEBSITE INITIALLY LOADS TRANSLATE ALL THE SLIDESHOWS
  TO THE CORRECT IMAGE BECAUSE THE FIRST IMAGE IS THE 3RD IMAGE. */
translateSlideshow(slideshowContainer, counter, false)


function translateSlideshow(slideshow, counter, transitionBoolean) {

  /* WHEN THE WEBSITE IS BELOW 1050PX THE IMAGES TAKE UP 100% OF THE CONTAINER 
  SO WE WANT TO TRANSLATE THE WHOLE IMAGE */
  if(websiteWidth < 970) {
    translateX = `translateX(-${counter * 100}%)`
    transitionTime = 2.7
  } 

  /* WHEN THE WEBSITE IS ABOVE 1050PX THE IMAGES TAKE UP 50%
  OF THE CONTAINER SO ONLY MOVE 1 IMAGE AT A TIME */

  else {
    translateX = `translateX(-${counter * 50}%)`
    transitionTime = 2.4
  }

  /* WHEN TRANSLATE SLIDESHOW IS CALLED IF TRANSITION == TRUE 
  THEN ADD A TRANSITION SO IMAGES ARE TRANSFORMED SMOOTHLY OTHERWISE 
  WE DON'T WANT A TRANSITION SO SET TRANSITION = NONE */
  if(transitionBoolean) {
    slideshow.style.transition = `transform ${transitionTime}s ease-in-out`
  } else {
    slideshow.style.transition = "none"
  }
  
  slideshow.style.transform = translateX
}



/* WHEN THE TRANSITION ENDS IF ON THE FIRST OR LAST IMAGE 
GO TO THE OPPOSITE SIDE OF THE SLIDESHOW BY UPDATING 
COUNTER THEN TRANSFORMING THE SLIDESHOW SO IT CAN 
CONTINUE TO TRANSITION SMOOTHLY BETWEEN IMAGES */
slideshowContainer.addEventListener('transitionend', () => {

  if (counter >= slideshowImages.length - 2) {

    counter = 2;
    translateSlideshow(slideshowContainer, counter, false)

  } else if (counter <= 1) {

    counter = slideshowImages.length - 3;
    translateSlideshow(slideshowContainer, counter, false)

  }
      
});


window.addEventListener("resize", function() {

  /* UPDATE THE WEBSITE WIDTH SO IT CAN BE USED TO 
  DETERMINE IF HOW MUCH TO TRANSLATE THE IMAGES */
  websiteWidth = window.innerWidth;

  /* WHEN THE WEBSITE IS RESIZED THE IMAGE SIZE WILL CHANGE 
  SO THE TRANSLATEX VALUE WILL NEED TO UPDATE ASWELL */

  translateSlideshow(slideshowContainer, counter, false)

});


setInterval(function() {

  if(counter <= slideshowImages.length - 3) {
    counter++;
  }

  translateSlideshow(slideshowContainer, counter, true)

}, 4500)