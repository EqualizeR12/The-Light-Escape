"use strict";

function firefly() {
  let countLighters = 26;
  let lightersContainer = document.querySelector("html");
  let img;

  for (let i = 1; i < countLighters; i++) {
    img = document.createElement("img");
    img.className = `lighters${i} positionFirefly`;
    img.setAttribute("alt", `lighters${i}`);
    img.setAttribute("src", `../../src/assets/lighters/lighter5.png`);
    lightersContainer.appendChild(img);
  }
}

module.exports = firefly;
