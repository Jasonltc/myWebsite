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
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  loop: true,
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

  tl.to(".airplane", { y: 1020 });
}

menuMobileActive();
addButtonUp();
scramble();
