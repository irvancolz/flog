const scrollToTopBtn = document.getElementById("scroll-top");
scrollToTopBtn.addEventListener("click", () => {
  window.scroll(0, 0);
});

const footer = document.querySelector(".footer");
const fixedNav = document.querySelector(".navigation.fixed");

document.addEventListener("DOMContentLoaded", () => {
  initFrogMarquee();
  initTextMarquee();
  initSocialMediaMarquee();
});

function initFrogMarquee() {
  const container = document.querySelector(".banner_marquee");
  for (let i = 0; i < 6; i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.classList.add("frog");
    item.innerHTML = `<img src="./assets/marquee-banner.png" alt="" />`;
    container.appendChild(item);
  }
}

function initSocialMediaMarquee() {
  const container = document.querySelector(".social_media_marquee");
  for (let i = 0; i < 7; i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.classList.add("social");
    item.innerHTML = `<img src="./assets/marquee-social-media.png" alt="" />`;
    container.appendChild(item);
  }
}

function initTextMarquee() {
  const container = document.querySelector(".flog_text_marquee");
  for (let i = 0; i < 50; i++) {
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
