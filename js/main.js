const imgBaseUrl = 'https://res.cloudinary.com/akinloludavid/image/upload/v1651612563/solafemmes-media/'

const heroImages = [
  "nft1_lzeuog.png",
  "nft2_s8vals.png",
  "nft3_jr2iag.png",
  "nft4_yqyjlx.png",
  "nft5_p56zwx.png",
  "nft6_uptnab.png",
];

const nftImage = document.querySelector(".nft-image");
const pattern = document.getElementById("pattern-image");
const hero = document.getElementById("hero-section");
const heroImage = document.getElementById("hero-section-image");
const mint = document.getElementById("mint-text-section");
const mintImage = document.getElementById("mint-image-section");
const roadMapHeader = document.getElementById("roadmap-section");
const stages = document.querySelectorAll(".stages");
const showcases = document.querySelectorAll(".showcase");
const footer = document.getElementById("footer");

let j = 0;

setInterval(() => {
  nftImage.src = imgBaseUrl + heroImages[j % 6];
  j++;
}, 200);

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    top + height <= window.pageYOffset + window.innerHeight &&
    left + width <= window.pageXOffset + window.innerWidth
  );
}
const utcDate = Date.UTC(2022, 3, 14, 12, 0, 0);
const finaleDate = new Date(utcDate).getTime();

const timer = () => {
  const now = new Date().getTime();
  const timer = document.getElementById("timer-container");
  let diff = finaleDate - now;
  // Showing the alert when the counter time finishes.
  if (diff < 0) {
    document.querySelector(".alert").style.display = "none";
    timer.classList.remove("d-flex");
    timer.classList.remove("d-none");

    timer.style.display = "none";
  }

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  // Adding the zeros.
  days <= 99 ? (days = `0${days}`) : days;
  days <= 9 ? (days = `00${days}`) : days;
  hours <= 9 ? (hours = `0${hours}`) : hours;
  minutes <= 9 ? (minutes = `0${minutes}`) : minutes;
  seconds <= 9 ? (seconds = `0${seconds}`) : seconds;

  document.querySelector("#days").textContent = days;
  document.querySelector("#hours").textContent = hours;
  document.querySelector("#minutes").textContent = minutes;
  document.querySelector("#seconds").textContent = seconds;
};
timer();
// Calling the function every 1000 milliseconds.
setInterval(timer, 1000);
