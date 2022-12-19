
/*========================= testimonial slider jQuery =========================*/
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1200: {
        items: 1,
      },
      1400: {
        items: 1,
      },
    },
  });
});