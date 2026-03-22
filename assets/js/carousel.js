const images = [
    "assets/img/Bauss.webp",
    "assets/img/Palazzo.webp",
    "assets/img/rock.webp"
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

function switchImage(newIndex) {
    carouselImage.style.transition = 'opacity 0.2s ease-in-out';
    carouselImage.style.opacity = 0;
    setTimeout(() => {
        currentIndex = newIndex;
        carouselImage.src = images[currentIndex];
        carouselImage.style.opacity = 1;
    }, 200);
}

// Function to show the next image
function nextImage() {
    switchImage((currentIndex + 1) % images.length);
}

// Function to show the previous image
function previousImage() {
    switchImage((currentIndex - 1 + images.length) % images.length);
}

window.addEventListener('load', () => {
    preloadImages(images);
    if ('AOS' in window) AOS.refresh();
});