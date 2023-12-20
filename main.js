function scramble() {
  const phrases = ["Welcome Abort", "Have a safe flight and seat your belt"];
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

function sliderPort() {
  $(".switch-btn").each(function () {
    $(this).on("click touch tap", function () {
      if (!$(this).hasClass("active")) {
        $(".switch-btn").removeClass("active");
        $(this).addClass("active");

        let getBlocName = $(this).attr("data-filter");

        $(".portfolio").each(function () {
          let getFilterName = $(this).attr("data-filter");

          if (getBlocName == getFilterName) {
            $(".portfolio").removeClass("active");
            $(this).addClass("active");
          }
        });
      }
    });
  });
}

//swiper
let swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  autoplay: {
    delay: 1500,
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
      pin: "true",
    },
  });

  tl.to(".airplane", { y: 1470, color: "#ee4036" });
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

  $(".to-the-top").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 300);
  });
}

function updateDate() {
  let date = new Date();
  let copyRight = document.querySelector(".all-rights");
  year = date.getFullYear();
  copyRight.innerHTML = `All rights reserved © ${year}`;
  console.log(copyRight);
}

window.addEventListener("load", () => {
  addButtonUp();
  scramble();
  sliderPort();
  updateDate();
});
