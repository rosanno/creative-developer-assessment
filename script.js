var femaleImg = document.getElementById("femaleImg");
var headline1 = document.getElementById("headlineOne");
var headline2 = document.getElementById("headlineTwo");
var subheadline = document.getElementById("subheadlineImg");
var button = document.getElementById("buttonImg");
var logoImg = document.getElementById("logoImg");
var replayImg = document.getElementById("replayImg");

function animate() {
  setTimeout(function () {
    femaleImg.style.opacity = "1";
  }, 300);

  setTimeout(function () {
    headline1.style.left = "0";
  }, 400);

  setTimeout(function () {
    headline1.style.transition = "transform .1s ease-in-out";
    headline1.style.transform = "scale(0)";
  }, 1800);

  setTimeout(function () {
    headline2.style.opacity = "1";
    headline2.style.right = "310px";
  }, 2000);

  setTimeout(function () {
    subheadline.style.opacity = "1";
  }, 3000);

  setTimeout(function () {
    button.style.opacity = "1";
  }, 3500);

  setTimeout(function () {
    logoImg.style.opacity = "1";
    logoImg.style.left = "700px";
  }, 3800);

  setTimeout(function () {
    replayImg.style.opacity = "1";
  }, 4300);

  setTimeout(function () {
    femaleImg.style.opacity = "0";
  }, 1000);
}

replayImg.addEventListener("click", function () {
  location.reload();
});

window.addEventListener("DOMContentLoaded", function () {
  animate();
});
