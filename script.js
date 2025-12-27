document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach(carousel => {
    const track = carousel.querySelector(".carousel-track");
    const images = carousel.querySelectorAll("img");
    const nextBtn = carousel.querySelector(".next");
    const prevBtn = carousel.querySelector(".prev");

    let index = 0;

    function updateCarousel() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % images.length;
      updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      updateCarousel();
    });
  });
});
