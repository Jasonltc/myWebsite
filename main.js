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
const el = document.querySelector(".text");
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
    $(".top").fadeIn(400);
  } else {
    $(".top").fadeOut(400);
  }
});

$(".top").on("click", function (e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: 0 }, 300);
});
