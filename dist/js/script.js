const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
});

$(function () {
  "use strict"

  $(document).ready(function () {
      $('.venobox').venobox();
  });

  // wow js
  new WOW().init();

});

const carousel = new bootstrap.Carousel('#myCarousel')