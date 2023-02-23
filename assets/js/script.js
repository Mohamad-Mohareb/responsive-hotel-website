const close = document.querySelector(".header-btn");
const nav = document.querySelector(".navbar");

close.addEventListener("click", ()=> {
    close.classList.toggle("active");
    nav.classList.toggle("active");
});

const arrow = document.querySelector(".arrow-btn");

window.addEventListener("scroll", ()=> {
  if (document.documentElement.scrollTop > 20) {
    arrow.classList.add("arrow-scroll");
  }
  else {
    arrow.classList.remove("arrow-scroll");
  }
});




$(function () {
  $("#inputCheckIn").datepicker();
  $("#inputCheckOut").datepicker();

  $('.level-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });


  function videoToggle() {
    video = $('.level-video').get(0)
    if (video.paused) {
      video.play();
      $('.video-control-play').hide();
      $('.video-control-pause').show();
    } else {
      video.pause();
      $('.video-control-play').show();
      $('.video-control-pause').hide();
    }
  }

  $('.video-control-play').click(function () {
    videoToggle();
  })
  $('.video-control-pause').click(function () {
    videoToggle();
  })

});
