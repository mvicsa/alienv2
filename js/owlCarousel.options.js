$(".user-nav .owl-carousel").each(function () {
  $(this).owlCarousel({
    loop: false,
    autoWidth: true,
    dots: false,
    nav: true,
    mouseDrag: true,
    navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],

  });
});