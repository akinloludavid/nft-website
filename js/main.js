const patternArray = [
  "../assets/patternpad5.svg",
  "../assets/patternpad1.svg",
  "../assets/patternpad2.svg",
  "../assets/patternpad3.svg",
];

const heroImages = [
  "../assets/nfts/nft1.jpeg",
  "../assets/nfts/nft2.jpeg",
  "../assets/nfts/nft3.jpeg",
  "../assets/nfts/nft4.jpeg",
  "../assets/nfts/nft5.jpeg",
  "../assets/nfts/nft6.jpeg",
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
