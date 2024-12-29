let slideIndex = 0;
let startX = 0;
let endX = 0;

// Move the carousel (manual or swipe)
function moveCarousel(index) {
  const slides = document.querySelector(".carousel-slide");
  const totalSlides = document.querySelectorAll(".carousel-item").length;
  slideIndex = (index + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;

  // Update dots
  updateDots();
}

// Update the active dot indicator
function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Swipe functionality for mobile devices
function handleSwipeStart(event) {
  startX = event.touches[0].clientX;
}

function handleSwipeMove(event) {
  endX = event.touches[0].clientX;
}

function handleSwipeEnd() {
  if (startX - endX > 50) {
    moveCarousel(slideIndex + 1);  // Swipe left -> next slide
  } else if (endX - startX > 50) {
    moveCarousel(slideIndex - 1);  // Swipe right -> previous slide
  }
}

// Touch events for swipe gestures
document.querySelector(".carousel-container").addEventListener("touchstart", handleSwipeStart);
document.querySelector(".carousel-container").addEventListener("touchmove", handleSwipeMove);
document.querySelector(".carousel-container").addEventListener("touchend", handleSwipeEnd);

// Initialize the first dot as active on page load
window.addEventListener("load", updateDots);

$('#carouselExampleAutoplaying').carousel({
  interval: 1000 // 1 second
});
