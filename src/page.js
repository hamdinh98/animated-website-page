const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const logo = document.querySelector('.logo')
const headline = document.querySelector('.headline')
const h1 = document.querySelector("h1");
const tl = new TimelineMax();
tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
    .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-m1.2")
    .fromTo(h1, 1.5, { y: "-100%" }, { y: "50%", ease: Power2.easeInOut })