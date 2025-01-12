// TO DO:
// FIND ACUTAL IMAGES
// MAKE IT SLIDE BETWEEN EACH IMAGE
// MAKE IT SO THAT CHANGING THE IMAGE DOESN'T MAKE THE PAGE JUMP
const images = [
    "assets/img/bauss.png",
    "assets/img/placeholder1.png",
    "assets/img/placeholder2.jpg"
];

// Current image index
let currentIndex = 0;

// Image element
const carouselImage = document.getElementById("carousel-image");

// Function to show the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop to the start if at the end
    carouselImage.src = images[currentIndex];
}

// Function to show the previous image
function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the end if at the start
    carouselImage.src = images[currentIndex];
}

