const patternArray = ['../assets/patternpad5.svg', '../assets/patternpad1.svg', '../assets/patternpad2.svg', '../assets/patternpad3.svg']
let options = {
    root: document.querySelector('#main-section'),
    rootMargin: '0px',
    threshold: 1.0
}

window.onscroll = function(){scrollFunction()}


const pattern = document.getElementById('pattern-image')
const hero = document.getElementById('hero-section')
const heroImage = document.getElementById('hero-section-image')
const mint = document.getElementById('mint-text-section')
const mintImage = document.getElementById('mint-image-section')
const roadMapHeader = document.getElementById('roadmap-section');
const stages = document.querySelectorAll('.stages')
const showcases = document.querySelectorAll('.showcase')
const footer = document.getElementById('footer')

function scrollFunction(){
    // if(elementInViewport(hero)){
    //     hero.classList.add('animate__animated', 'animate__slideInUp')
    // }
    
    // if(elementInViewport(heroImage)){
    //     heroImage.classList.add('animate__animated', 'animate__fadeInRight')
    // }
    if(elementInViewport(mintImage)){
        mintImage.classList.add('animate__animated', 'animate__fadeInLeft')
    }
    
    if(elementInViewport(mint)){
        mint.classList.add('animate__animated', 'animate__fadeInRight')
    }
    if(elementInViewport(roadMapHeader)){
        roadMapHeader.classList.add('animate__animated', 'animate__fadeInUp')
    }
    stages.forEach((stage)=> {
        if(elementInViewport(stage)){
            stage.classList.add('animate__animated', 'animate__fadeInUp')
        }
    })
    showcases.forEach((showcase)=> {
        if(elementInViewport(showcase)){
            showcase.classList.add('animate__animated', 'animate__fadeInUp')
        }
        // showcase.addEventListener('mouseover', (evt)=> {
        //     showcase.classList.add('animate__animated', 'animate__fadeInUp')
        // })
    })
}







let count = 0
let i = 0;
setInterval(()=> {
    pattern.src = patternArray[i%4]
    i++
},1000)



function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  }
  