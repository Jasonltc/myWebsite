// career path section
// scramble.js
const phrases = [
  "Hola,",
  "Welcome Abort",
  "Enjoy your flight",
  "Have a safe flight and seat your belt",
  "Ready",
  "Go",
  "enjoying :)",
];
const el = document.querySelector(".flight-text");
const fx = new TextScramble(el);
let counter = 0;

const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800);
  });
  counter = (counter + 1) % phrases.length;
};
next();

// add up button
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 300) {
    $(".to-the-top").fadeIn(600);
  } else {
    $(".to-the-top").fadeOut(600);
  }
});

$(".top").on("click", function (e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: 0 }, 300);
});

//swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  coverflowEffect: {
    rotate: 15,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
});
