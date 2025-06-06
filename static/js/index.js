window.HELP_IMPROVE_VIDEOJS = false;

document.addEventListener('DOMContentLoaded', function () {
  const options = {
    slidesToScroll: 1,
    slidesToShow: 2,
    centerMode: true,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000
  };

  // Initialize all carousels
  const carousels = bulmaCarousel.attach('.carousel', options);

  // Add 'before:show' listener to each initialized carousel
  carousels.forEach(carousel => {
    carousel.on('before:show', state => {
      console.log(state);
    });
  });

  // Optional: Access a specific element instance
  const element = document.querySelector('#my-element');
  if (element && element.bulmaCarousel) {
    element.bulmaCarousel.on('before:show', function (state) {
      console.log(state);
    });
  }
});