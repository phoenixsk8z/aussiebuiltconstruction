const Slideshows = document.getElementsByClassName('slideshow');
const slideshows = document.getElementsByClassName('slideshow-imgs-div');
const nextButtons = document.getElementsByClassName('next-button');
const prevButtons = document.getElementsByClassName('prev-button');

/* CREATES AN EMPTY ARRAY AND THEN GOES THROUGH 
   A LOOP TO DYNAMICALLY ADD SLIDESHOWS */
var allSlideshows = []

for (var count = 0; count < Slideshows.length; count++) {

    // GET ALL THE SLIDESHOW IMGS WITHIN A SPECIFIC SLIDESHOW
    var slideshowImgs = document.getElementsByClassName(`slideshow-img${count}`);

    // CREATE SLIDESHOW OBJECT USING [COUNT] TO DYNAMICALLY UPDATE THE VALUES.
    var slideshow = {
        "slideshow": slideshows[count], 
        "counter": 2, 
        "nextButton": nextButtons[count], 
        "prevButton": prevButtons[count], 
        "slideshowImgs": slideshowImgs
    }

    // ONCE THE SLIDESHOW IS CREATED ADD IT TO THE END OF THE SLIDESHOWS ARRAY.
    allSlideshows.push(slideshow);

};


// GET WEBSITE WIDTH AND DEFINE TRANSLATEX 
let websiteWidth = window.innerWidth;

/* WHEN THE WEBSITE INITIALLY LOADS TRANSLATE ALL THE SLIDESHOWS
   TO THE CORRECT IMAGE BECAUSE THE FIRST IMAGE IS THE 3RD IMAGE. */
allSlideshows.forEach(item => {

    translateSlideshow(item.slideshow, item.counter, false)

})


allSlideshows.forEach(item => {

    item.prevButton.addEventListener('click', function() {

        /* IF THE COUNT IS TO LOW DONT UPDATE THE COUNT WHEN 
        THE PREVBUTTON IS CLICKED SO THE SLIDESHOW DOESN'T 
        GO OUT OF FRAME BY TRANSLATING IT TO FAR */
        if(item.counter >= 2) {
            item.counter--;
        }

        translateSlideshow(item.slideshow, item.counter, true)
    })

})

allSlideshows.forEach(item => {

    item.nextButton.addEventListener('click', function() {
        
        /* IF THE COUNT IS TOO HIGH DONT UPDATE THE COUNT WHEN 
        THE NEXTBUTTON IS CLICKED SO THE SLIDESHOW DOESN'T GO OUT
        OF FRAME BY TRANSLATING IT TO FAR */
        if(item.counter <= item.slideshowImgs.length - 3) {
            item.counter++;
        }

        translateSlideshow(item.slideshow, item.counter, true)
    })

})

window.addEventListener("resize", function() {

    /* UPDATE THE WEBSITE WIDTH SO IT CAN BE USED TO 
    DETERMINE IF HOW MUCH TO TRANSLATE THE IMAGES */
    websiteWidth = window.innerWidth;

    /* WHEN THE WEBSITE IS RESIZED THE IMAGE SIZE WILL CHANGE 
    SO THE TRANSLATEX VALUE WILL NEED TO UPDATE ASWELL */
    allSlideshows.forEach(item => {
        translateSlideshow(item.slideshow, item.counter, false)
    });

});


allSlideshows.forEach(item => {

    /* WHEN THE TRANSITION ENDS IF ON THE FIRST OR LAST IMAGE 
    GO TO THE OPPOSITE SIDE OF THE SLIDESHOW BY UPDATING 
    COUNTER THEN TRANSFORMING THE SLIDESHOW SO IT CAN 
    CONTINUE TO TRANSITION SMOOTHLY BETWEEN IMAGES */
    item.slideshow.addEventListener('transitionend', () => {

        if (item.counter >= item.slideshowImgs.length - 2) {

            item.counter = 2;
            translateSlideshow(item.slideshow, item.counter, false)

        } else if (item.counter <= 1) {

            item.counter = item.slideshowImgs.length - 3;
            translateSlideshow(item.slideshow, item.counter, false)

        }
        
    });

});


function translateSlideshow(slideshow, counter, transitionBoolean) {

    /* WHEN THE WEBSITE IS BELOW 1050PX THE IMAGES TAKE UP 100% OF THE CONTAINER 
    SO WE WANT TO TRANSLATE THE WHOLE IMAGE */
    if(websiteWidth < 1050) {
        translateX = `translateX(-${counter * 100}%)`
    } 
    /* WHEN THE WEBSITE IS ABOVE 1050PX THE IMAGES TAKE UP 50%
    OF THE CONTAINER SO ONLY MOVE 1 IMAGE AT A TIME */
    else {
        translateX = `translateX(-${counter * 50}%)`
    }

    /* WHEN TRANSLATE SLIDESHOW IS CALLED IF TRANSITION == TRUE 
    THEN ADD A TRANSITION SO IMAGES ARE TRANSFORMED SMOOTHLY OTHERWISE 
    WE DON'T WANT A TRANSITION SO SET TRANSITION = NONE */
    if(transitionBoolean) {
        slideshow.style.transition = "transform 1.2s ease-in-out"
    } else {
        slideshow.style.transition = "none"
    }
    
    slideshow.style.transform = translateX
}
