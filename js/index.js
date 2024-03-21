
// & S  L  I  D  E  R

let images = Array.from(document.querySelectorAll(".slider img"));
let lightBoxContainer = document.querySelector(".slider");
let currentIndex = 0;

// ^ Start slider
nextImage();

function showImage(index) {
    for (let i = 0; i < images.length; i++) {
        if (i === index) {
            images[i].style.opacity = 1;
        } else {
            images[i].style.opacity = 0;
        }
    }
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    setTimeout(nextImage, 3000); 
}

// & S  C  R  O  L  L      N  A  V  B  A  R

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav');
    if (window.scrollY > 50) { // Change 50 to the desired scroll threshold
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

