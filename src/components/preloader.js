"use  strict";
require("../scss/preloader.scss");

document.body.style.overflowY = "hidden";
document.documentElement.style.overflowY = "hidden";

function preloader() {
  let loadBar = document.querySelector(".load-progress");

  document.body.onload = function () {
    setTimeout(() => {
      for (let i = 1; i <= 10; i++) {
        loadBar.style.width = `${i + 10}0%`;
        // console.log(loadBar.style.width);
      }
    }, 500);

    setTimeout(() => {
      let preloader = document.querySelector(".preloader");

      if (!preloader.classList.contains("preloader-done")) {
        preloader.classList.add("preloader-done");
      }

      document.body.style.overflowY = "scroll";
      document.documentElement.style.overflowY = "scroll";
    }, 4000);
  };
}

module.exports = preloader;
