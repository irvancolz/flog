gsap.registerPlugin(ScrollTrigger);

const scrollToTopBtn = document.getElementById("scroll-top");
scrollToTopBtn.addEventListener("click", () => {
  window.scroll(0, 0);
});

const footer = document.querySelector(".footer");
const fixedNav = document.querySelector(".navigation.fixed");

function getStartStopAnimate() {
  if (window.innerWidth < 768) {
    return "top bottom";
  }
  return "90% bottom";
}

gsap.to(fixedNav, {
  opacity: 0,
  duration: 0.5,
  ease: "linear",
  scrollTrigger: {
    trigger: footer,
    start: getStartStopAnimate(),
    end: getStartStopAnimate(),
    toggleActions: "play none none reverse",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  initFrogMarquee();
  initTextMarquee();
});

function initFrogMarquee() {
  const container = document.querySelectorAll(".flog_intro_marquee");
  container.forEach((el) => {
    for (let i = 0; i < 8; i++) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.classList.add("frog");
      item.innerHTML = `<img src="./assets/frog-marquee.png" alt="" />`;
      el.appendChild(item);
    }
  });
}

function initTextMarquee() {
  const container = document.querySelector(".flog_text_marquee");
  for (let i = 0; i < 100; i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.classList.add("text");
    item.innerHTML = `<img src="./assets/flog-text.png" alt="" />`;
    container.appendChild(item);
  }
}

const comingSoonUrls = document.querySelectorAll(".coming_soon");
comingSoonUrls.forEach((url) => {
  url.addEventListener("click", (e) => e.preventDefault());
});
