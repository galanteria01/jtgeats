$(document).ready(function () {
  if (window.matchMedia("(max-width: 600px)").matches) {
    $('.items--carousal').slick({
      // slidesToShow: 1,
      centerMode: true,
    });
  } else if (window.matchMedia("(max-width: 992px)").matches) {
    $('.items--carousal').slick({
      slidesToShow: 2,
      centerMode: true,
    });
  } else {
    $('.items--carousal').slick({
      slidesToShow: 3,
      centerMode: true,
    });
  }
});

