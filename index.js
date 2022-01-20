gsap.registerPlugin(ScrollTrigger);

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
//   //   directon: "horizontal",
// });

gsap.to(".sd", {
  ScrollTrigger: {
    trigger: ".sd",
    toggleActions: "restart none none none",
  },
  opacity: 0,
});

const tll = gsap.timeline({
  paused: "true",
});
tll.to("#percent, #bar", {
  duration: 0.2,
  opacity: 0,
  zIndex: -1,
});
tll.to("#preloader", {
  duration: 0.5,
  width: "0%",
  zIndex: -1,
});
var width = 1;
var bar = document.getElementById("barconfrm");
var id;
function move() {
  id = setInterval(frame, 10);
}
function frame() {
  if (width >= 100) {
    clearInterval(id);
    setTimeout(() => tll.play(), 150);
  } else {
    width++;
    bar.style.width = width + "%";
    document.getElementById("percent").innerHTML = width + "%";
  }
}

let arr = [
  "B$u$i$ld",
  "$t$$h$e",
  "N$e$x$t",
  "E$$ra",
  "$$o$f$",
  "S$$of$t$wa$r$e",
  "De$$ve$l$op$me$n$t",
];
let removedSign = [];
arr.map((elem) => {
  removedSign.push(elem.split("$").join("").toLocaleUpperCase());
});
console.log(...removedSign);
