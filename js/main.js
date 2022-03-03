const patternArray = [
  "../assets/patternpad5.svg",
  "../assets/patternpad1.svg",
  "../assets/patternpad2.svg",
  "../assets/patternpad3.svg",
];

const heroImages = [
  "../assets/nfts/nft1.png",
  "../assets/nfts/nft2.png",
  "../assets/nfts/nft3.png",
  "../assets/nfts/nft4.png",
  "../assets/nfts/nft5.png",
  "../assets/nfts/nft6.png",
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

let i = 0;
let j = 0;
setInterval(() => {
  pattern.src = patternArray[i % 4];
  i++;
}, 1000);
setInterval(() => {
  nftImage.src = heroImages[j % 6];
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

const finaleDate = new Date("March 19, 2022 00:00:00").getTime();

const timer = () => {
  const now = new Date().getTime();
  let diff = finaleDate - now;
  // Showing the alert when the counter time finishes.
  if (diff < 0) {
    document.querySelector(".alert").style.display = "block";
    document.querySelector(".container").style.display = "none";
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
