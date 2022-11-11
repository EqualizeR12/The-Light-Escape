"use strict";

function firefly() {
  let countLighters = 33;
  let lightersContainer = document.querySelector("html");
  let img;

  for (let i = 7; i < countLighters; i++) {
    img = document.createElement("img");
    img.className = `lighters${i} positionFirefly`;
    img.setAttribute("alt", `lighters${i}`);
    lightersContainer.appendChild(img);
    img.setAttribute("src", `../../src/assets/lighters/lighter5.png`);
  }
}

module.exports = firefly;
