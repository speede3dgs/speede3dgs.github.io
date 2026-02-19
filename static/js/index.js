window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {

  // Intelligent Autoplay with IntersectionObserver
  // Only play videos when they are actually visible in the viewport.
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.play().catch(function (error) { });
      } else {
        entry.target.pause();
      }
    });
  }, { threshold: 0.1 });

  function attachObserverToCarouselVideos(carousel) {
    var videos = carousel.wrapper.querySelectorAll('video');
    videos.forEach(function (video) {
      video.muted = true;
      video.playsInline = true;
      observer.observe(video);
    });
  }

  var options = {
    slidesToScroll: 1,
    slidesToShow: 2,
    centerMode: true, // Enable center mode
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    breakpoints: [{
      changePoint: 768,
      slidesToShow: 1,
      slidesToScroll: 1,
      pagination: true,
      navigation: false
    }]
  };

  // Initialize all div with carousel class
  var carousels = bulmaCarousel.attach('.carousel', options);

  // Loop on each carousel initialized
  for (var i = 0; i < carousels.length; i++) {
    attachObserverToCarouselVideos(carousels[i]);
    // Add listener to  event
    carousels[i].on('before:show', state => {
      console.log(state);
    });
    // Dot pagination can set string indices; normalize so arrow math keeps working.
    carousels[i].on('after:show', function (state) {
      state.index = Number(state.index);
      state.next = Number(state.next);
    });
  }

  // Access to bulmaCarousel instance of an element
  var element = document.querySelector('#my-element');
  if (element && element.bulmaCarousel) {
    // bulmaCarousel instance is available as element.bulmaCarousel
    element.bulmaCarousel.on('before-show', function (state) {
      console.log(state);
    });
  }


})
