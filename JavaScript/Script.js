let currentIndex = 0;
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  function changeSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    updateSlidePosition();
  }

  function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function autoSlide() {
    changeSlide(1);
  }

  setInterval(autoSlide, 5000); // 5 Saniye