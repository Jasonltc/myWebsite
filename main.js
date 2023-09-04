//mobile menu active
const menuMobileActive = function () {
  const menuButton = document.querySelector(".menu");
  const menu = document.querySelector(".menu-item");
  menuButton.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
};

// scramble.js
function scramble() {
  const phrases = [
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
}

function addButtonUp() {
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
}

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

// gsap animation
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

if (window.innerWidth >= 1024) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".my_journey",
      start: "top top",
      end: "bottom 300",
      scrub: "true",
      markers: "true",
      pin: "true",
    },
  });

  tl.to(".airplane", { y: 1020, color: "#31cc31" });
}

menuMobileActive();
addButtonUp();
scramble();
