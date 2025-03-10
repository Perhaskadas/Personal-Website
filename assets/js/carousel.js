const images = [
    "assets/img/Bauss.png",
    "assets/img/Palazzo.JPG",
    "assets/img/rock.png"
];

function preloadImages(imageArray) {
    imageArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }

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

window.onload = () => preloadImages(images);