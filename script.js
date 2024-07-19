const scrollToTopBtn = document.getElementById("scroll-top");
scrollToTopBtn.addEventListener("click", () => {
  window.scroll(0, 0);
});

const footer = document.querySelector(".footer");
const fixedNav = document.querySelector(".navigation.fixed");

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

let currScroll = 0;
document.addEventListener("scroll", () => {
  const navigation = document.querySelector(".navigation.fixed");
  if (scrollY < currScroll && !navigation.classList.contains("show")) {
    navigation.classList.add("show");
  }
  const maxScrollPos =
    document.documentElement.offsetHeight -
    document.documentElement.clientHeight;

  if (scrollY > maxScrollPos - window.innerHeight * 0.15) {
    if (!navigation.className.includes("show")) return;
    navigation.classList.remove("show");
  } else {
    if (navigation.className.includes("show")) return;
    navigation.classList.add("show");
  }
  currScroll = window.scrollY;
});
