//mobile menu active
const menuMobileActive = function () {
  const menuButton = document.querySelector(".menu");
  const menu = document.querySelector(".main_header--section-items");
  menuButton.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
};

// scramble.js
function scramble() {
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
}

//accordion for skill
const accordion = document.querySelectorAll(".skill-item");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
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
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#career-path",
    start: "top 80%",
    end: "top 20%",
    scrub: 4,
    markers: true,
  },
});

// tl.to(".flight-announcement", {
//   opacity: 0,
//   duration: 5,
// })

tl.to(".plane", {
  motionPath: {
    path: [
      { x: 100, y: -20 },
      { x: 200, y: -110 },
      { x: 500, y: -220 },
    ],
    curviness: 2,
    autoRotate: true,
    duration: 5,
  },
});

menuMobileActive();
addButtonUp();
scramble();
