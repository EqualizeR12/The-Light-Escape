"use strict";

require("../scss/progressBar.scss");
let progressLine = document.querySelector(".progress-line");

function progressBar() {
  document.onscroll = function () {
    let positionScroll =
      (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
      100;

    progressLine.style.width = `${positionScroll}%`;
  };
}

module.exports = progressBar;
