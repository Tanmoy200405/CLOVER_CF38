//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach((card) => {
      const top = card.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
          card.classList.add("reveal");
      }
  });
});

// Scroll-triggered animation for Explore More section
window.addEventListener("scroll", () => {
    const container1 = document.querySelector("#container1");
    const container1Top = container1.getBoundingClientRect().top;

    if (container1Top < window.innerHeight - 100) {
        container1.classList.add("visible");
    }
});

// GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
gsap.from("#about h2", {
    scrollTrigger: {
        trigger: "#about h2",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    onComplete: () => {
        gsap.set("#about h2", { opacity: 1, transform: "none" });
    },
});

gsap.from(".about-text p", {
    scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    onComplete: () => {
        gsap.set(".about-text p", { opacity: 1, transform: "none" });
    },
});

gsap.from(".learn-more", {
    scrollTrigger: {
        trigger: ".learn-more",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    onComplete: () => {
        gsap.set(".learn-more", { opacity: 1, transform: "none" });
    },
});

gsap.from(".card", {
    scrollTrigger: {
        trigger: ".card-container",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    onComplete: () => {
        gsap.set(".card", { opacity: 1, transform: "none" });
    },
});

gsap.from("#contact h2", {
    scrollTrigger: {
        trigger: "#contact h2",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    onComplete: () => {
        gsap.set("#contact h2", { opacity: 1, transform: "none" });
    },
});

gsap.from("#contact form .form-group", {
    scrollTrigger: {
        trigger: "#contact form",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    onComplete: () => {
        gsap.set("#contact form .form-group", { opacity: 1, transform: "none" });
    },
});

gsap.from("#contact .submit-btn", {
    scrollTrigger: {
        trigger: "#contact form",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    onComplete: () => {
        gsap.set("#contact .submit-btn", { opacity: 1, transform: "none" });
    },
});

