// LIGHTBOX FUNCTIONS for Electronic Clarinetist Page

// slideIndex initializes image number that matches the image number from html
let slideIndex = 1;

// changes the current image by increasing or decreasing the slideIndex value
function plusDivs(n){
    showDivs(slideIndex += n);
}

// displays current image which was clicked by taking its value as "n"
function current(n){
    slideIndex = n;
    showDivs(slideIndex);
}

// loops through all the images in the gallery, hides all of them and then shows the one that matches the current number
function showDivs(n){
    // var i;
    
    // grabs all the images from the image gallery and stores them in an array
    var galleryArray = document.getElementsByClassName("gallery-img");
    
    // if you reach the last image in the array, it goes back to the first image
    if(n > galleryArray.length){
        slideIndex = 1;
    }
    // if you reach the number of image that is lower than the first image, it goes back to the last image in the array
    if(n < 1){
        slideIndex = galleryArray.length;
    }
    
    // loops through all the images in the array and sets display to none
    for(let i = 0; i < galleryArray.length; i++){
        galleryArray[i].style.display = "none"; 
    }
    
    // matches the image index to the number in the slideIndex variable and sets that image to display block
    galleryArray[slideIndex - 1].style.display = "block";
}
