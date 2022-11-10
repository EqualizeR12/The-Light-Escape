"use strict";

let paw = document.querySelector(".background-light__paw");
let gameLogo = document.querySelector(".title-game__logo");

window.addEventListener("scroll", () => {
  let postionScroll =
    (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;

  if (postionScroll > 1) {
    gameLogo.style.animation = "animationTitleBackInJS 1s forwards ease";
    paw.style.animation = "animationPawBackInJS 1.5s backwards ease";
  }

  if (postionScroll < 1) {
    paw.style.animation = "animationPaw 1.5s forwards ease";
    gameLogo.style.animation = "animationTitle 1.5s backwards ease";
  }
});
